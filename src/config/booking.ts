/* ------------------------------------------------------------------ *
 *  Prise de rendez-vous et coordonnées.
 *
 *  Tout ce qui peut changer sans toucher au code de la page vit ici :
 *  les liens Cal.com, les deux durées proposées, l'adresse et le
 *  téléphone affichés. La page `/contact` ne lit que ce fichier.
 *
 *  Les liens Cal.com sont publics (ils finissent dans le HTML servi) :
 *  il est normal qu'ils ne soient pas des secrets. La clé Resend, elle,
 *  reste côté serveur dans `api/contact.ts`.
 * ------------------------------------------------------------------ */

/** Identifiant Cal.com de Flowera, tel qu'il apparaît dans cal.com/<handle>. */
export const CAL_USERNAME = import.meta.env.VITE_CAL_USERNAME || 'flowera.ch';

export type BookingOption = {
    /** Sert de clé React et d'ancre dans l'URL (?duree=30). */
    id: '30' | '60';
    /**
     * Slug du créneau Cal.com. Doit exister tel quel dans le tableau de bord,
     * sinon l'embed affiche « Error Code: 404 » à la place de l'agenda.
     * Le titre affiché ici est indépendant de celui de Cal.com : renommer
     * l'événement côté Cal.com ne casse rien tant que le slug ne bouge pas.
     */
    slug: string;
    /** Namespace de l'embed : un par créneau, sinon les deux se marchent dessus. */
    namespace: string;
    duration: string;
    title: string;
    /**
     * La question qui fait choisir. Elle passe avant la description :
     * le visiteur se reconnaît dans l'une des deux, et la comparaison
     * entre les deux formats se règle en une ligne.
     */
    hook: string;
    /** Ce qui aide vraiment à choisir : pour qui, et ce qu'on y fait. */
    description: string;
    /** Repères concrets, affichés sous la description. */
    points: string[];
};

/**
 * Les deux formats d'appel. L'ordre est celui de l'affichage :
 * le plus court d'abord, parce que c'est l'engagement le plus facile à prendre.
 *
 * Les slugs visent les créneaux réellement présents sur cal.com/flowera.ch.
 * Au 24/09/2026 : `30min` existe (« 30 min meeting »), `60min` reste à créer.
 * Voir docs/setup-contact-et-rendez-vous.md.
 */
export const BOOKING_OPTIONS: BookingOption[] = [
    {
        id: '30',
        slug: import.meta.env.VITE_CAL_SLUG_30 || '30min',
        namespace: 'cadrage30',
        duration: '30 min',
        title: 'Premier échange',
        hook: 'Vous découvrez Flowera ?',
        description:
            "Vous décrivez votre situation, nous vous disons si nous pouvons aider et comment \u2014 franchement, même si la réponse est non.",
        points: ['Sans préparation de votre côté', 'Visio', 'Vous repartez avec un avis clair'],
    },
    {
        id: '60',
        slug: import.meta.env.VITE_CAL_SLUG_60 || '60min',
        namespace: 'atelier60',
        duration: '1 h',
        title: 'Atelier de cadrage',
        hook: 'Vous avez déjà une idée et souhaitez approfondir ?',
        description:
            "Nous entrons dans vos processus, vos outils et vos volumes pour dégrossir le sujet et repérer par où commencer.",
        points: ['Venez avec un processus en tête', 'Visio ou sur place en Suisse romande', 'Vous repartez avec des pistes'],
    },
];

/** Lien complet vers un créneau Cal.com. */
export const calLink = (option: BookingOption) => `${CAL_USERNAME}/${option.slug}`;

/**
 * Coordonnées affichées publiquement.
 * `PRODUCT.md` mentionne encore contact@flowera.fr : l'adresse ci-dessous
 * est celle que Fantin a demandé d'afficher, sur le domaine canonique .ch.
 */
export const CONTACT_EMAIL = 'fantin.schellekens@flowera.ch';

/**
 * Adresse publique, volontairement au niveau du quartier.
 *
 * Tant qu'aucune domiciliation genevoise n'est signée, un numéro de rue
 * inventé produirait un NAP invérifiable : Google refuse de valider une fiche
 * dont l'adresse ne correspond à rien, et l'erreur se propage ensuite à tous
 * les annuaires où le NAP doit rester identique au caractère près.
 * 1205 est le code postal de Plainpalais / Jonction.
 *
 * Dès que l'adresse réelle existe, remplacer `STREET` et la réutiliser
 * partout : Footer, ContactPage, JSON-LD `LocalBusiness`, Google Business
 * Profile, annuaires. Voir `docs/SEO-GEO-PLAYBOOK.md` § 4.
 */
export const COMPANY_ADDRESS = {
    street: '',
    district: 'Quartier de Plainpalais',
    postalCode: '1205',
    locality: 'Genève',
    region: 'GE',
    country: 'Suisse',
    countryCode: 'CH',
} as const;

/** Lignes prêtes à afficher, sans ligne vide si la rue n'est pas connue. */
export const COMPANY_ADDRESS_LINES: string[] = [
    COMPANY_ADDRESS.street,
    COMPANY_ADDRESS.district,
    `${COMPANY_ADDRESS.postalCode} ${COMPANY_ADDRESS.locality}, ${COMPANY_ADDRESS.country}`,
].filter(Boolean);

/** Fourchettes en francs suisses, alignées sur des budgets de PME. */
export const BUDGET_OPTIONS = [
    'Moins de 10 000 CHF',
    '10 000 – 25 000 CHF',
    '25 000 – 50 000 CHF',
    'Plus de 50 000 CHF',
    'À définir ensemble',
];
