/**
 * Télécharge le Chromium de Playwright, sauf là où il ne servirait pas.
 *
 * Sur Vercel, `scripts/prerender.mjs` utilise `@sparticuz/chromium` (l'image
 * de build n'a pas les bibliothèques système de Chromium). Télécharger en plus
 * le binaire de Playwright coûterait une quinzaine de secondes par build pour
 * un fichier jamais lancé.
 */
import { execSync } from 'node:child_process';

if (process.env.VERCEL || process.env.CI) {
    console.log('[install-browser] Environnement de build : @sparticuz/chromium sera utilisé, téléchargement ignoré.');
    process.exit(0);
}

try {
    execSync('playwright install chromium', { stdio: 'inherit' });
} catch {
    // Un poste sans navigateur reste utilisable : `npm run build:spa` marche,
    // et `npm run build` dira précisément quoi lancer.
    console.warn('[install-browser] Échec du téléchargement. `npx playwright install chromium` au besoin.');
}
