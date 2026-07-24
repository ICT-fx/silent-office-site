import type { SolutionData } from './types';

// Contenu réécrit (phase 2) — angle anti-gadget : l'IA formée sur les vrais
// process quotidiens des équipes, jamais sur des démonstrations ou des usages superflus.
// `id`, `slug`, `title` et `promise` restent verbatim (spec validée).

export const formation: SolutionData = {
    id: 'formation',
    slug: 'formation',
    title: 'Formation & Transformation',
    promise: "L'IA qui fait vraiment gagner du temps.",
    shortDescription:
        "Vos équipes formées à utiliser l’IA sur leurs vraies tâches, pas sur des démonstrations.",
    gains: [
        {
            scenario:
                'Un compte-rendu de réunion rédigé en 2 minutes au lieu de 30, une synthèse de dossier obtenue en quelques secondes.',
            label: 'Des heures rendues à vos équipes chaque semaine',
        },
        {
            scenario:
                "Un cadre simple sur ce qui peut être confié à l’IA et ce qui ne doit jamais l’être, appliqué par tous sans exception.",
            label: 'Une adoption sans risque pour vos données',
        },
        {
            scenario:
                "Des équipes qui utilisent encore ces réflexes six mois après la formation, sans repasser à l’ancienne méthode.",
            label: 'Un savoir-faire qui reste dans l’entreprise',
        },
    ],
    useCases: [
        {
            title: "Former une équipe qui n’a jamais utilisé l’IA",
            before:
                "Chacun a entendu parler de l’IA, personne ne sait par où commencer ni ce qu’elle peut vraiment changer à son poste.",
            setup:
                'Un atelier construit uniquement sur les tâches réelles de l’équipe — leurs mails, leurs comptes-rendus, leurs documents types — sans passer par des exemples génériques.',
            result:
                'Chaque participant repart avec deux ou trois usages précis, déjà testés sur ses propres dossiers, prêts à réutiliser dès le lendemain.',
        },
        {
            title: 'Cadrer des usages déjà installés',
            before:
                'Des outils utilisés en ordre dispersé selon les collaborateurs, sans règle commune, avec parfois des données sensibles collées dans des outils grand public.',
            setup:
                "Un cadre écrit et discuté avec les équipes : ce qui est autorisé, ce qui ne l’est jamais, et les bons réflexes à garder en toutes circonstances.",
            result:
                'Les usages qui font gagner du temps sont conservés et généralisés, les pratiques à risque disparaissent, tout le monde applique la même règle.',
        },
        {
            title: 'Donner à un comité de direction une vision claire',
            before:
                "Les dirigeants entendent parler d’IA partout mais ne savent pas ce qui, concrètement, mérite d’être mis en place dans leur entreprise.",
            setup:
                "Une session dédiée sur les décisions et process propres à la direction : préparation de comités, reporting, veille sectorielle — rien d’autre.",
            result:
                "Un plan d’usages priorisés, limité à ce qui fait vraiment gagner du temps ou de la fiabilité, le reste étant explicitement écarté.",
        },
    ],
    steps: [
        {
            title: 'Diagnostic des usages',
            description:
                "Nous observons les tâches réelles de vos équipes et repérons où l’IA fera vraiment gagner du temps — et où elle n’a rien à faire.",
            duration: '1 semaine',
        },
        {
            title: 'Ateliers pratiques',
            description:
                'Nous formons chaque équipe directement sur ses documents et ses cas, avec des exercices appliqués plutôt que des présentations.',
            duration: '2 à 3 sessions',
        },
        {
            title: 'Mise en pratique accompagnée',
            description:
                "Vos équipes utilisent les usages appris sur leurs dossiers en cours, avec un point de contrôle pour lever les blocages rencontrés.",
            duration: '2 à 3 semaines',
        },
        {
            title: 'Bilan et ancrage',
            description:
                'Nous vérifions ce qui est réellement resté en usage et consolidons les pratiques qui ont fait leurs preuves.',
            duration: '1 mois après la formation',
        },
    ],
};
