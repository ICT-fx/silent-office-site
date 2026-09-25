/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** Identifiant Cal.com utilisé pour les liens de réservation (cal.com/<handle>). */
    readonly VITE_CAL_USERNAME: string
    /** Slugs des deux créneaux, si vous les renommez côté Cal.com. */
    readonly VITE_CAL_SLUG_30: string
    readonly VITE_CAL_SLUG_60: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
