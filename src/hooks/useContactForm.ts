import { useCallback, useRef, useState, type FormEvent } from 'react';

/* ------------------------------------------------------------------ *
 *  Envoi d'un formulaire de contact vers `api/contact.ts`.
 *
 *  Deux formulaires s'en servent — celui de la page /contact et le
 *  formulaire court du pied de page — et il faut qu'ils se comportent
 *  exactement pareil : même validation côté serveur, mêmes messages
 *  d'erreur, même accusé de réception. D'où ce hook partagé.
 * ------------------------------------------------------------------ */

export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error';

const FALLBACK_ERROR =
    "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous directement.";

/**
 * @param source Indique dans le mail reçu d'où vient la demande
 *               (« Page contact », « Pied de page »…).
 */
export function useContactForm(source: string) {
    const [status, setStatus] = useState<ContactStatus>('idle');
    const [error, setError] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setStatus('submitting');
            setError(null);

            const payload = {
                ...Object.fromEntries(new FormData(event.currentTarget).entries()),
                source,
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                // En `npm run dev`, /api/ n'existe pas et Vite renvoie index.html :
                // sans ce garde-fou, la réponse ne serait pas du JSON et l'erreur
                // affichée serait incompréhensible. Tester l'envoi demande `vercel dev`.
                const data = await response.json().catch(() => null);

                if (!response.ok || !data?.ok) {
                    throw new Error(data?.error ?? FALLBACK_ERROR);
                }

                setStatus('success');
                formRef.current?.reset();
            } catch (submitError) {
                setStatus('error');
                setError(submitError instanceof Error ? submitError.message : FALLBACK_ERROR);
            }
        },
        [source],
    );

    const reset = useCallback(() => {
        setStatus('idle');
        setError(null);
    }, []);

    return { status, error, formRef, handleSubmit, reset };
}
