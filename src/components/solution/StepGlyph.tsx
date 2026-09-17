import React from 'react';

/* ------------------------------------------------------------------ *
 *  Pictogrammes des étapes de la méthode (page solution compacte).
 *  Dessinés à la main plutôt que pris dans une librairie : ils se
 *  tracent à l'écran, trait après trait, quand l'étape s'ouvre.
 *  L'ordre de tracé est porté par `data-draw` (1 à 5) et les délais
 *  vivent dans `.glyph-draw` (src/index.css).
 * ------------------------------------------------------------------ */

/** Un trait unique pour les cinq pictogrammes : arrondi, ni fin ni épais. */
const STROKE = 1.5;

type Paths = { d: string; order: number }[];

/** Écoute terrain : deux bulles de conversation. */
const listening: Paths = [
    { d: 'M5 4.5h8A2.5 2.5 0 0 1 15.5 7v4A2.5 2.5 0 0 1 13 13.5H8.6L5 16.4V13A2.5 2.5 0 0 1 2.5 10.5V7A2.5 2.5 0 0 1 5 4.5Z', order: 1 },
    { d: 'M6 8.4h5.5', order: 2 },
    { d: 'M6 11h3.4', order: 3 },
    { d: 'M17.4 7.6h1.9A2.2 2.2 0 0 1 21.5 9.8v3.4a2.2 2.2 0 0 1-2.2 2.2v2.9l-3.4-2.9h-2', order: 4 },
];

/** Cartographie : trois blocs reliés entre eux. */
const map: Paths = [
    { d: 'M3.6 3.4h4.8A1.6 1.6 0 0 1 10 5v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 7.8V5a1.6 1.6 0 0 1 1.6-1.6Z', order: 1 },
    { d: 'M15.6 3.4h4.8A1.6 1.6 0 0 1 22 5v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8A1.6 1.6 0 0 1 14 7.8V5a1.6 1.6 0 0 1 1.6-1.6Z', order: 2 },
    { d: 'M9.6 15.2h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 19.6v-2.8a1.6 1.6 0 0 1 1.6-1.6Z', order: 3 },
    { d: 'M6 9.4v1.7a1.4 1.4 0 0 0 1.4 1.4h9.2a1.4 1.4 0 0 0 1.4-1.4V9.4', order: 4 },
    { d: 'M12 12.5v2.7', order: 5 },
];

/** Chiffrage : trois mesures sur une ligne de base. */
const measure: Paths = [
    { d: 'M3 20.2h18', order: 1 },
    { d: 'M7.2 20.2v-4.6', order: 2 },
    { d: 'M12 20.2v-8.4', order: 3 },
    { d: 'M16.8 20.2v-12.4', order: 4 },
];

/** Restitution : un écran partagé, posé sur son pied. */
const workshop: Paths = [
    { d: 'M4.6 3.6h14.8A1.9 1.9 0 0 1 21.3 5.5v8.2a1.9 1.9 0 0 1-1.9 1.9H4.6a1.9 1.9 0 0 1-1.9-1.9V5.5a1.9 1.9 0 0 1 1.9-1.9Z', order: 1 },
    { d: 'M6.8 11.8l3.4-3.6 2.6 2.4 4.4-4.4', order: 2 },
    { d: 'M12 15.6v2.9', order: 3 },
    { d: 'M8.4 20.6h7.2', order: 4 },
];

/** Plan d'action : les chantiers cochés, un par un. */
const plan: Paths = [
    { d: 'M6.4 2.9h11.2a1.9 1.9 0 0 1 1.9 1.9v14.4a1.9 1.9 0 0 1-1.9 1.9H6.4a1.9 1.9 0 0 1-1.9-1.9V4.8a1.9 1.9 0 0 1 1.9-1.9Z', order: 1 },
    { d: 'M7.8 8.6l1.5 1.5 2.7-2.9', order: 2 },
    { d: 'M14 9h2.4', order: 3 },
    { d: 'M7.8 15.2l1.5 1.5 2.7-2.9', order: 4 },
    { d: 'M14 15.6h2.4', order: 5 },
];

/* ---- Automatisation : une famille de processus par pictogramme ---- */

/** Finance & comptabilité : une facture, lignes et total. */
const invoice: Paths = [
    { d: 'M6.4 2.9h8.2l4.5 4.5v11.8a1.9 1.9 0 0 1-1.9 1.9H6.4a1.9 1.9 0 0 1-1.9-1.9V4.8a1.9 1.9 0 0 1 1.9-1.9Z', order: 1 },
    { d: 'M14.6 2.9v4.5h4.5', order: 2 },
    { d: 'M8.2 11.6h7.6', order: 3 },
    { d: 'M8.2 14.8h7.6', order: 4 },
    { d: 'M11.6 18h4.2', order: 5 },
];

/** Ventes : un panier de commande. */
const cart: Paths = [
    { d: 'M2.6 4h2.1l2.2 10.2a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.2l1.7-6.6H6.1', order: 1 },
    { d: 'M9.2 18.1a1.3 1.3 0 1 1 0 2.6a1.3 1.3 0 1 1 0-2.6Z', order: 2 },
    { d: 'M16.6 18.1a1.3 1.3 0 1 1 0 2.6a1.3 1.3 0 1 1 0-2.6Z', order: 3 },
];

/** Ressources humaines : deux personnes. */
const people: Paths = [
    { d: 'M9 4.6a3.1 3.1 0 1 1 0 6.2a3.1 3.1 0 1 1 0-6.2Z', order: 1 },
    { d: 'M2.8 20v-1.4a5.2 5.2 0 0 1 5.2-5.2h2a5.2 5.2 0 0 1 5.2 5.2V20', order: 2 },
    { d: 'M16.4 5.2a2.6 2.6 0 0 1 0 5.2', order: 3 },
    { d: 'M18.2 13.6a4.6 4.6 0 0 1 3 4.3V20', order: 4 },
];

/** Logistique : un colis. */
const box: Paths = [
    { d: 'M12 2.8l8.2 4.6v9.2L12 21.2l-8.2-4.6V7.4L12 2.8Z', order: 1 },
    { d: 'M3.8 7.4L12 12l8.2-4.6', order: 2 },
    { d: 'M12 12v9.2', order: 3 },
    { d: 'M7.9 5.1l8.2 4.6', order: 4 },
];

/** Relation client : un casque d'écoute. */
const headset: Paths = [
    { d: 'M4.4 13V11a7.6 7.6 0 0 1 15.2 0v2', order: 1 },
    { d: 'M4.4 13h1.6a1.6 1.6 0 0 1 1.6 1.6v2.2a1.6 1.6 0 0 1-1.6 1.6H4.4a1.6 1.6 0 0 1-1.6-1.6v-2.2A1.6 1.6 0 0 1 4.4 13Z', order: 2 },
    { d: 'M18 13h1.6a1.6 1.6 0 0 1 1.6 1.6v2.2a1.6 1.6 0 0 1-1.6 1.6H18a1.6 1.6 0 0 1-1.6-1.6v-2.2A1.6 1.6 0 0 1 18 13Z', order: 3 },
    { d: 'M19.6 18.4v.6a2.2 2.2 0 0 1-2.2 2.2H13', order: 4 },
];

/** Et tout le reste : ce qui se répète. */
const loop: Paths = [
    { d: 'M20 12a8 8 0 0 1-13.7 5.6', order: 1 },
    { d: 'M6 20.4v-3.2h3.2', order: 2 },
    { d: 'M4 12a8 8 0 0 1 13.7-5.6', order: 3 },
    { d: 'M18 3.6v3.2h-3.2', order: 4 },
];

/* ---- Data & BI : une famille d'indicateurs par pictogramme ---- */

/** Pilotage : un cadran. */
const gauge: Paths = [
    { d: 'M3.4 16.2a8.6 8.6 0 1 1 17.2 0', order: 1 },
    { d: 'M12 16.2l4.2-5.4', order: 2 },
    { d: 'M12 15a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0-2.4Z', order: 3 },
    { d: 'M6.2 20.2h11.6', order: 4 },
];

/** Finance & trésorerie : un billet. */
const note: Paths = [
    { d: 'M3 6.4h18a1.6 1.6 0 0 1 1.6 1.6v8a1.6 1.6 0 0 1-1.6 1.6H3A1.6 1.6 0 0 1 1.4 16V8A1.6 1.6 0 0 1 3 6.4Z', order: 1 },
    { d: 'M12 9.4a2.6 2.6 0 1 1 0 5.2a2.6 2.6 0 1 1 0-5.2Z', order: 2 },
    { d: 'M5 12h1.2', order: 3 },
    { d: 'M17.8 12H19', order: 4 },
];

/** Ventes & clients : une répartition, un quart détaché du disque. */
const pie: Paths = [
    { d: 'M12.8 4.2a8.6 8.6 0 1 1-8.6 8.6h8.6V4.2Z', order: 1 },
    { d: 'M10.2 10.2V1.6A8.6 8.6 0 0 0 1.6 10.2h8.6Z', order: 2 },
];

/** Opérations & production : un engrenage. */
const cog: Paths = [
    { d: 'M18.0 12.24 L20.51 13.21 L20.14 14.79 L17.45 14.51 L16.07 16.41 L17.16 18.88 L15.78 19.72 L14.08 17.63 L11.76 18.0 L10.79 20.51 L9.21 20.14 L9.49 17.45 L7.59 16.07 L5.12 17.16 L4.28 15.78 L6.37 14.08 L6.0 11.76 L3.49 10.79 L3.86 9.21 L6.55 9.49 L7.93 7.59 L6.84 5.12 L8.22 4.28 L9.92 6.37 L12.24 6.0 L13.21 3.49 L14.79 3.86 L14.51 6.55 L16.41 7.93 L18.88 6.84 L19.72 8.22 L17.63 9.92Z', order: 1 },
    { d: 'M12 9.4a2.6 2.6 0 1 1 0 5.2a2.6 2.6 0 1 1 0-5.2Z', order: 2 },
];

/** Alertes : une cloche. */
const bell: Paths = [
    { d: 'M6.2 16.6V11a5.8 5.8 0 0 1 11.6 0v5.6l1.6 1.8H4.6l1.6-1.8Z', order: 1 },
    { d: 'M10 20.4a2.1 2.1 0 0 0 4 0', order: 2 },
    { d: 'M12 3v2.2', order: 3 },
];

/* ---- Développement logiciel : une famille de projets par pictogramme ---- */

/** Outils de gestion interne : une interface avec son volet et ses lignes. */
const dashboard: Paths = [
    { d: 'M4.6 3.6h14.8A1.9 1.9 0 0 1 21.3 5.5v13a1.9 1.9 0 0 1-1.9 1.9H4.6a1.9 1.9 0 0 1-1.9-1.9v-13a1.9 1.9 0 0 1 1.9-1.9Z', order: 1 },
    { d: 'M2.7 8.6h18.6', order: 2 },
    { d: 'M10.2 8.6v11.8', order: 3 },
    { d: 'M13 12.4h5.4M13 15.6h5.4', order: 4 },
];

/** Portails clients & fournisseurs : en ligne, à toute heure. */
const globe: Paths = [
    { d: 'M12 3.4a8.6 8.6 0 1 1 0 17.2a8.6 8.6 0 1 1 0-17.2Z', order: 1 },
    { d: 'M12 3.4a3.6 8.6 0 1 0 0 17.2a3.6 8.6 0 1 0 0-17.2Z', order: 2 },
    { d: 'M3.4 12h17.2', order: 3 },
];

/** Fichiers Excel critiques : un tableau. */
const grid: Paths = [
    { d: 'M4.2 3.6h15.6a1.7 1.7 0 0 1 1.7 1.7v13.4a1.7 1.7 0 0 1-1.7 1.7H4.2a1.7 1.7 0 0 1-1.7-1.7V5.3a1.7 1.7 0 0 1 1.7-1.7Z', order: 1 },
    { d: 'M2.5 9.2h19M2.5 14.8h19', order: 2 },
    { d: 'M9 3.6v16.8M15.6 3.6v16.8', order: 3 },
];

/** Applications métier : l'outil sur le terrain, en main. */
const tablet: Paths = [
    { d: 'M7 2.6h10a2 2 0 0 1 2 2v14.8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4.6a2 2 0 0 1 2-2Z', order: 1 },
    { d: 'M8.4 7h7.2M8.4 10h4.6', order: 2 },
    { d: 'M12 17a.9.9 0 1 1 0 1.8a.9.9 0 1 1 0-1.8Z', order: 3 },
];

/** Connexion entre outils : trois systèmes reliés. */
const nodes: Paths = [
    { d: 'M12 3.4a2.4 2.4 0 1 1 0 4.8a2.4 2.4 0 1 1 0-4.8Z', order: 1 },
    { d: 'M5 15.5a2.4 2.4 0 1 1 0 4.8a2.4 2.4 0 1 1 0-4.8Z', order: 2 },
    { d: 'M19 15.5a2.4 2.4 0 1 1 0 4.8a2.4 2.4 0 1 1 0-4.8Z', order: 3 },
    { d: 'M7.4 17.9h9.2M6.3 15.8l4.5-7.6M17.7 15.8l-4.5-7.6', order: 4 },
];

/* ---- Formation : un chapitre du programme par pictogramme ---- */

/** Acculturation : une idée qui s'allume. */
const bulb: Paths = [
    { d: 'M8.6 15.6a6.2 6.2 0 1 1 6.8 0c-.8.6-1.2 1.4-1.2 2.4H9.8c0-1-.4-1.8-1.2-2.4Z', order: 1 },
    { d: 'M10.2 18h3.6', order: 2 },
    { d: 'M9.8 20.4h4.4', order: 3 },
];

/** Panorama des technologies : des couches. */
const layers: Paths = [
    { d: 'M12 3.6l8.4 4.2-8.4 4.2-8.4-4.2 8.4-4.2Z', order: 1 },
    { d: 'M3.6 12l8.4 4.2 8.4-4.2', order: 2 },
    { d: 'M3.6 16.2l8.4 4.2 8.4-4.2', order: 3 },
];

/** De la vision à l'exécution : une cible. */
const target: Paths = [
    { d: 'M12 3.4a8.6 8.6 0 1 1 0 17.2a8.6 8.6 0 1 1 0-17.2Z', order: 1 },
    { d: 'M12 7.6a4.4 4.4 0 1 1 0 8.8a4.4 4.4 0 1 1 0-8.8Z', order: 2 },
    { d: 'M12 11a1 1 0 1 1 0 2a1 1 0 1 1 0-2Z', order: 3 },
];

/** Mise en œuvre opérationnelle : la console. */
const terminal: Paths = [
    { d: 'M4.6 3.6h14.8A1.9 1.9 0 0 1 21.3 5.5v13a1.9 1.9 0 0 1-1.9 1.9H4.6a1.9 1.9 0 0 1-1.9-1.9v-13a1.9 1.9 0 0 1 1.9-1.9Z', order: 1 },
    { d: 'M7 9l3.2 3-3.2 3', order: 2 },
    { d: 'M12.2 15h4.6', order: 3 },
];

/** Gouvernance, risques et sécurité : un bouclier. */
const shield: Paths = [
    { d: 'M12 2.8l7.6 2.8v6.2c0 4.6-3.2 7.8-7.6 9.4-4.4-1.6-7.6-4.8-7.6-9.4V5.6L12 2.8Z', order: 1 },
    { d: 'M8.8 12.2l2.2 2.2 4.4-4.6', order: 2 },
];

/** Transformation continue : une pousse. */
const sprout: Paths = [
    { d: 'M12 21V10', order: 1 },
    { d: 'M12 14c0-3.4-2.6-6-6-6c0 3.4 2.6 6 6 6Z', order: 2 },
    { d: 'M12 10c0-3.4 2.6-6 6-6c0 3.4-2.6 6-6 6Z', order: 3 },
    { d: 'M7 21h10', order: 4 },
];

const GLYPHS: Record<string, Paths> = {
    listening,
    map,
    measure,
    workshop,
    plan,
    invoice,
    cart,
    people,
    box,
    headset,
    loop,
    gauge,
    note,
    pie,
    cog,
    bell,
    dashboard,
    globe,
    grid,
    tablet,
    nodes,
    bulb,
    layers,
    target,
    terminal,
    shield,
    sprout,
};

interface StepGlyphProps {
    /** Clé du pictogramme ; un nom inconnu n'affiche rien plutôt qu'un symbole faux. */
    name?: string;
    className?: string;
    color?: string;
}

const StepGlyph: React.FC<StepGlyphProps> = ({ name, className = '', color = '#027333' }) => {
    const paths = name ? GLYPHS[name] : undefined;
    if (!paths) return null;

    return (
        <svg
            viewBox="0 0 24 24"
            className={`glyph-draw ${className}`}
            fill="none"
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
        >
            {paths.map((path) => (
                <path key={path.d} d={path.d} pathLength={1} data-draw={path.order} />
            ))}
        </svg>
    );
};

export default StepGlyph;
