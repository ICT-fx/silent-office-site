import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

/* ------------------------------------------------------------------ *
 *  Réception du formulaire de contact.
 *
 *  Tourne côté serveur sur Vercel : la clé Resend n'est jamais servie
 *  au navigateur. Deux messages partent à chaque envoi valide :
 *    1. la demande vers la boîte de Fantin, avec Reply-To = le prospect,
 *       pour qu'une réponse depuis la boîte parte directement au bon
 *       destinataire ;
 *    2. un accusé de réception vers le prospect.
 *
 *  Le second est secondaire : s'il échoue, la demande est quand même
 *  passée, donc on répond succès et on se contente de logguer.
 * ------------------------------------------------------------------ */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'fantin.schellekens@flowera.ch';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Flowera <contact@flowera.ch>';

/** Bornes hautes : au-delà, c'est un robot ou un copier-coller accidentel. */
const LIMITS = {
    name: 120,
    company: 160,
    email: 200,
    phone: 40,
    budget: 60,
    message: 5000,
    source: 60,
} as const;

type Field = keyof typeof LIMITS;

/**
 * Minimum vital. `company` n'en fait pas partie : le formulaire du pied de
 * page est volontairement court et ne le demande pas.
 */
const REQUIRED: Field[] = ['name', 'email', 'message'];

const LABELS: Record<Field, string> = {
    name: 'Nom',
    company: 'Entreprise',
    email: 'E-mail',
    phone: 'Téléphone',
    budget: 'Budget envisagé',
    message: 'Besoin décrit',
    source: 'Envoyé depuis',
};

/**
 * Volontairement permissive : un format d'adresse trop strict rejette de
 * vraies adresses. Resend refusera de toute façon ce qui n'existe pas.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');

/** Tout ce qui vient du formulaire est interpolé dans du HTML : on échappe. */
const escapeHtml = (value: string): string =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const paragraphs = (value: string): string =>
    escapeHtml(value)
        .split(/\n{2,}/)
        .map((block) => `<p style="margin:0 0 12px">${block.replace(/\n/g, '<br />')}</p>`)
        .join('');

const row = (label: string, value: string): string =>
    `<tr>
        <td style="padding:8px 16px 8px 0;color:#6b6b6b;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
        <td style="padding:8px 0;color:#262626;font-size:15px;font-weight:600">${escapeHtml(value)}</td>
    </tr>`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Méthode non autorisée.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        // Mieux vaut un message explicite qu'un formulaire qui avale les demandes.
        console.error('[contact] RESEND_API_KEY absente : impossible d’envoyer.');
        return res.status(503).json({
            error: "L'envoi est momentanément indisponible. Écrivez-nous directement, nous répondons vite.",
        });
    }

    const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) ?? {};

    /* Trace d'entrée. Volontairement sans donnée personnelle : on garde le
       domaine de l'adresse, jamais l'adresse ni le message. C'est le minimum
       pour distinguer « la demande n'est jamais arrivée » de « elle est
       arrivée et a été écartée », les deux se ressemblant côté visiteur. */
    const domain = clean(body.email).split('@')[1] || '?';
    console.log(
        `[contact] reçu — source=${clean(body.source) || '?'} domaine=${domain} piège=${clean(body.website) ? 'REMPLI' : 'vide'}`,
    );

    // Champ piège : invisible pour un humain, rempli par la plupart des robots.
    if (clean(body.website)) {
        console.warn('[contact] écarté : champ piège rempli (robot, ou remplissage automatique du navigateur)');
        return res.status(200).json({ ok: true });
    }

    const values = {} as Record<Field, string>;
    for (const field of Object.keys(LIMITS) as Field[]) {
        values[field] = clean(body[field]).slice(0, LIMITS[field]);
    }

    const missing = REQUIRED.filter((field) => !values[field]);
    if (missing.length > 0) {
        console.warn('[contact] écarté : champs manquants —', missing.join(', '));
        return res.status(400).json({
            error: `Merci de remplir : ${missing.map((field) => LABELS[field].toLowerCase()).join(', ')}.`,
        });
    }

    if (!EMAIL_RE.test(values.email)) {
        console.warn('[contact] écarté : adresse e-mail invalide');
        return res.status(400).json({ error: "Cette adresse e-mail ne semble pas valide." });
    }

    const resend = new Resend(apiKey);

    const details = ([['name'], ['company'], ['email'], ['phone'], ['budget'], ['source']] as [Field][])
        .filter(([field]) => values[field])
        .map(([field]) => row(LABELS[field], values[field]))
        .join('');

    const notification = await resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        replyTo: values.email,
        subject: values.company
            ? `Demande de ${values.name} — ${values.company}`
            : `Demande de ${values.name}`,
        html: `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;padding:32px 24px;color:#262626">
            <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#027333">Formulaire flowera.ch</p>
            <h1 style="margin:0 0 24px;font-size:22px;font-weight:800;letter-spacing:-.02em">Nouvelle demande</h1>
            <table style="border-collapse:collapse;margin-bottom:24px">${details}</table>
            <div style="border-top:1px solid #E5E1D6;padding-top:20px;font-size:15px;line-height:1.6">
                <p style="margin:0 0 12px;color:#6b6b6b;font-size:13px">Besoin décrit</p>
                ${paragraphs(values.message)}
            </div>
            <p style="margin:24px 0 0;font-size:13px;color:#6b6b6b">Répondez à ce message : la réponse part directement à ${escapeHtml(values.email)}.</p>
        </div>`,
    });

    if (notification.error) {
        console.error('[contact] échec de la notification :', notification.error);
        return res.status(502).json({
            error: "L'envoi a échoué. Réessayez, ou écrivez-nous directement.",
        });
    }

    // Accusé de réception : agréable, mais jamais bloquant.
    const acknowledgement = await resend.emails.send({
        from: FROM_EMAIL,
        to: [values.email],
        replyTo: TO_EMAIL,
        subject: 'Nous avons bien reçu votre demande',
        html: `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#262626;line-height:1.65">
            <p style="margin:0 0 20px;font-size:16px">Bonjour ${escapeHtml(values.name.split(' ')[0] || values.name)},</p>
            <p style="margin:0 0 20px;font-size:16px">Merci pour votre message : il est bien arrivé. Nous le lisons et revenons vers vous sous un jour ouvré.</p>
            <p style="margin:0 0 20px;font-size:16px">Si vous préférez avancer tout de suite, vous pouvez choisir un créneau directement dans notre agenda :</p>
            <p style="margin:0 0 28px">
                <a href="https://www.flowera.ch/contact" style="display:inline-block;background:#027333;color:#ffffff;text-decoration:none;padding:13px 26px;border-radius:10px;font-weight:600;font-size:15px">Réserver un appel</a>
            </p>
            <div style="border-top:1px solid #E5E1D6;padding-top:20px;font-size:14px;color:#6b6b6b">
                <p style="margin:0 0 4px;color:#262626;font-weight:600">Flowera</p>
                <p style="margin:0">Applications sur mesure, automatisation des processus et intelligence artificielle.</p>
            </div>
        </div>`,
    });

    if (acknowledgement.error) {
        console.error('[contact] accusé de réception non envoyé :', acknowledgement.error);
    }

    /* Les identifiants Resend sont la seule preuve consultable a posteriori :
       ils permettent de retrouver le message dans le tableau de bord Resend
       et d'y lire son statut de livraison. */
    console.log(
        `[contact] envoyé — notification=${notification.data?.id ?? '?'} accusé=${acknowledgement.data?.id ?? 'ÉCHEC'}`,
    );

    return res.status(200).json({ ok: true });
}

function safeParse(raw: string): Record<string, unknown> | null {
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}
