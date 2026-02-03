
import React from 'react';
import { Layout, Cpu, PieChart, Users, CheckCircle2 } from 'lucide-react';

export interface SolutionData {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    problem: {
        title: string;
        items: string[];
    };
    solution: {
        title: string;
        description: string;
    };
    useCases: {
        title: string;
        description: string;
        icon: any;
    }[];
    kpi: {
        value: string;
        label: string;
    }[];
}

export const solutionsData: Record<string, SolutionData> = {
    'audit-processus': {
        id: 'audit-processus',
        title: "Audit de Processus & Performance",
        subtitle: "Détectez les gisements de productivité cachés et transformez vos inefficacités en leviers de croissance.",
        heroImage: "https://picsum.photos/1920/1080?office&blur=2",
        problem: {
            title: "Vos défis actuels",
            items: [
                "Processus historiques lourds et non documentés",
                "Perte d'information entre les départements (Silos)",
                "Tâches manuelles répétitives monopolisant les talents",
                "Manque de visibilité sur les coûts réels des opérations"
            ]
        },
        solution: {
            title: "Notre Approche : Le Diagnostic Flash",
            description: "Nous déployons une analyse 360° de vos flux opérationnels. En 2 semaines, nous cartographions l'existant, identifions les goulots d'étranglement et quantifions le ROI potentiel de chaque automatisation."
        },
        useCases: [
            {
                title: "Cartographie des Flux",
                description: "Visualisation complète de vos workflows (BPMN) pour identifier les ruptures de charge.",
                icon: Layout
            },
            {
                title: "Matrice de Matûrité IA",
                description: "Évaluation de votre prêtitude technologique et humaine à accueillir l'IA.",
                icon: CheckCircle2
            },
            {
                title: "Roadmap ROI",
                description: "Plan d'action priorisé par rentabilité et faisabilité technique.",
                icon: PieChart
            }
        ],
        kpi: [
            { value: "2 sem.", label: "Durée moyenne" },
            { value: "+30%", label: "Gains identifiés" },
            { value: "100%", label: "Feuille de route" }
        ]
    },
    'optimisation': {
        id: 'optimisation',
        title: "Optimisation & Automatisation",
        subtitle: "Libérez vos équipes des tâches répétitives grâce à des agents IA autonomes et fiables.",
        heroImage: "https://picsum.photos/1920/1080?tech&blur=2",
        problem: {
            title: "Les freins à votre vélocité",
            items: [
                "Saisie multiple de données entre systèmes non connectés",
                "Erreurs humaines coûteuses sur les processus critiques",
                "Délais de traitement trop longs pour vos clients",
                "Frustration des équipes sur des tâches sans valeur ajoutée"
            ]
        },
        solution: {
            title: "L'Orchestration Intelligente",
            description: "Nous créons des ponts invisibles entre vos outils (CRM, ERP, Mails). Nos agents virtuels prennent en charge les tâches répétitives 24/7 avec une précision parfaite, permettant à vos équipes de se concentrer sur l'exception et la relation client."
        },
        useCases: [
            {
                title: "Traitement de Factures",
                description: "Extraction automatique (OCR), validation et injection en comptabilité sans intervention.",
                icon: Cpu
            },
            {
                title: "Onboarding Client",
                description: "Génération automatique des contrats et création des accès utilisateurs.",
                icon: Users
            },
            {
                title: "Synchronisation CRM/ERP",
                description: "Mise à jour temps réel des stocks et commandes entre Sales et Logistique.",
                icon: Layout
            }
        ],
        kpi: [
            { value: "-80%", label: "Temps de traitement" },
            { value: "0%", label: "Taux d'erreur" },
            { value: "24/7", label: "Disponibilité" }
        ]
    },
    'finance': {
        id: 'finance',
        title: "RPA",
        subtitle: "Automatisez vos processus métier sans modifier vos systèmes existants grâce à la reconnaissance visuelle et l'OCR.",
        heroImage: "https://picsum.photos/1920/1080?robot&blur=2",
        problem: {
            title: "Les défis de l'automatisation classique",
            items: [
                "Systèmes legacy sans API disponibles",
                "Tâches manuelles répétitives sur interfaces graphiques",
                "Saisie de données entre applications non connectées",
                "Coûts prohibitifs de refonte des systèmes existants"
            ]
        },
        solution: {
            title: "L'Automatisation Intelligente par RPA",
            description: "Silent Office déploie des robots logiciels qui interagissent avec vos applications comme le ferait un humain. Grâce à la reconnaissance visuelle et l'OCR, nos agents automatisent vos processus sans nécessiter d'intégration API ou de modification de vos systèmes."
        },
        useCases: [
            {
                title: "Automatisation de Formulaires",
                description: "Remplissage automatique de formulaires web et applications desktop via reconnaissance visuelle.",
                icon: Layout
            },
            {
                title: "Extraction OCR Avancée",
                description: "Lecture et extraction de données depuis factures, emails et documents scannés avec 98% de précision.",
                icon: CheckCircle2
            },
            {
                title: "Workflows Multi-Applications",
                description: "Orchestration de tâches complexes entre ERP, CRM, emails et systèmes métier sans API.",
                icon: Cpu
            }
        ],
        kpi: [
            { value: "-85%", label: "Temps de traitement" },
            { value: "24/7", label: "Disponibilité robot" },
            { value: "0%", label: "Taux d'erreur" }
        ]
    },
    'strategie': {
        id: 'strategie',
        title: "Stratégie Board & Acculturation",
        subtitle: "Formation des dirigeants et montée en compétences des équipes. Comprenez les enjeux de l'IA, explorez le champ des possibles et sécurisez votre transition technologique par une acculturation en profondeur.",
        heroImage: "https://picsum.photos/1920/1080?meeting&blur=2",
        problem: {
            title: "Le fossé technologique",
            items: [
                "Comex déconnecté des réalités de l'IA Générative",
                "Initiatives dispersées sans cohérence stratégique (Shadow AI)",
                "Risques de sécurité et de fuite de données sous-estimés",
                "Résistance au changement des équipes opérationnelles"
            ]
        },
        solution: {
            title: "L'Alignement Stratégique",
            description: "Nous accompagnons les Boards pour définir une vision IA claire et éthique. Nous formons vos équipes (Upskilling) pour qu'elles deviennent les architectes de leur propre automatisation, garantissant une adoption massive et pérenne."
        },
        useCases: [
            {
                title: "Masterclass Comex",
                description: "Session intensive pour comprendre les enjeux stratégiques et géopolitiques de l'IA.",
                icon: Users
            },
            {
                title: "Charte Éthique & Gouvernance",
                description: "Définition des règles d'usage et de sécurité des outils IA en interne.",
                icon: CheckCircle2
            },
            {
                title: "Hackathon Interne",
                description: "Événement fédérateur pour faire émerger les cas d'usage terrain.",
                icon: Cpu
            }
        ],
        kpi: [
            { value: "100%", label: "Adoption Comex" },
            { value: "x3", label: "Vitesse d'innovation" },
            { value: "ISO", label: "Sécurité validée" }
        ]
    }
};
