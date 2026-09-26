/**
 * Pré-rendu statique post-build.
 *
 * Pourquoi un snapshot navigateur plutôt qu'un SSG Node (vite-react-ssg,
 * react-snap) : l'application touche `window` partout — le Preloader mesure le
 * logo du Header au runtime, Framer Motion anime au montage, le Header écoute
 * le scroll. Un rendu Node casserait sur `window is not defined` dans une
 * dizaine de composants. Un vrai Chromium exécute le code tel qu'il est écrit.
 *
 * Effet : chaque route obtient un `dist/<route>/index.html` contenant le HTML
 * complet. Les crawlers qui n'exécutent pas JS — GPTBot, ClaudeBot,
 * PerplexityBot, CCBot — voient enfin le contenu. Avant ce script, les 17 URLs
 * servaient 4 725 octets sans une ligne de texte.
 *
 * Le script est volontairement STRICT : il fait échouer le build s'il ne peut
 * pas pré-rendre. Depuis que `vercel.json` n'a plus de rewrite fourre-tout
 * (nécessaire pour obtenir de vrais 404 et servir `llms.txt`), ces fichiers
 * sont load-bearing : sans eux, toutes les routes renverraient 404. Un échec
 * bruyant au build vaut mieux qu'un site cassé en production.
 * Échappatoire si besoin : `npm run build:spa`.
 */

import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PORT = 4321;
const SITE_URL = 'https://www.flowera.ch';

/** Attente du signal posé par `<Seo />` une fois le `<head>` à jour. */
const SEO_READY = 'html[data-seo-ready]';

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
    '.webm': 'video/webm',
    '.mp4': 'video/mp4',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
};

/**
 * Liste des routes, dérivée des données plutôt que recopiée.
 * Une offre ajoutée dans `src/data/solutions/` ou un article dans
 * `insights.ts` est pré-rendu sans toucher à ce fichier.
 */
async function collectRoutes() {
    const routes = [
        { route: '/', source: 'src/pages/Home.tsx' },
        { route: '/solutions', source: 'src/components/SolutionsPage.tsx' },
        { route: '/portfolio', source: 'src/data/portfolio.ts' },
        { route: '/insights', source: 'src/components/InsightsPage.tsx' },
        { route: '/contact', source: 'src/pages/ContactPage.tsx' },
        { route: '/careers', source: 'src/pages/CareersPage.tsx' },
    ];

    const solutionsDir = join(ROOT, 'src/data/solutions');
    for (const file of await readdir(solutionsDir)) {
        if (!file.endsWith('.ts') || file === 'index.ts' || file === 'types.ts') continue;
        const source = await readFile(join(solutionsDir, file), 'utf-8');
        const slug = source.match(/^\s*slug:\s*'([^']+)'/m)?.[1];
        if (slug) routes.push({ route: `/solutions/${slug}`, source: `src/data/solutions/${file}` });
    }

    // Les articles sont datés par leur date de publication affichée, plus
    // fidèle qu'une date de fichier : `ArticleDetailPage.tsx` les porte tous,
    // sa date de modification ne dit rien d'un article en particulier.
    const insights = await readFile(join(ROOT, 'src/data/insights.ts'), 'utf-8');
    const block = insights.slice(insights.indexOf('insightPosts'));
    for (const entry of block.matchAll(/id:\s*'([^']+)'[\s\S]*?date:\s*"([^"]+)"/g)) {
        routes.push({ route: `/insights/${entry[1]}`, date: toIsoDate(entry[2]) });
    }

    return routes;
}

const MONTHS = {
    jan: '01', fév: '02', fev: '02', mar: '03', avr: '04', mai: '05',
    jui: '06', juil: '07', aoû: '08', aou: '08', sep: '09', oct: '10',
    nov: '11', déc: '12', dec: '12',
};

/** « 1 Août 2026 » → « 2026-08-01 ». Même logique que `src/seo/RouteSeo.tsx`. */
function toIsoDate(label) {
    const m = label.trim().match(/^(\d{1,2})\s+([^\s]+)\s+(\d{4})$/);
    if (!m) return undefined;
    const key = m[2].toLowerCase().replace('.', '').slice(0, 4);
    const month = MONTHS[key] ?? MONTHS[key.slice(0, 3)];
    return month ? `${m[3]}-${month}-${m[1].padStart(2, '0')}` : undefined;
}

/**
 * Date de dernière modification réelle d'un fichier, via git.
 * `lastmod` doit refléter un changement de contenu : le remplir avec la date
 * du build reviendrait à annoncer une mise à jour à chaque déploiement, ce que
 * Google finit par ignorer.
 */
function lastModified(source) {
    if (!source) return undefined;
    try {
        const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', source], {
            cwd: ROOT,
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'ignore'],
        }).trim();
        return out ? out.slice(0, 10) : undefined;
    } catch {
        return undefined;
    }
}

/** Sitemap régénéré à chaque build depuis la liste de routes pré-rendues. */
async function writeSitemap(entries) {
    const urls = entries
        .map(({ route, source, date }) => {
            const lastmod = date ?? lastModified(source);
            return [
                '  <url>',
                `    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>`,
                lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
                '  </url>',
            ]
                .filter(Boolean)
                .join('\n');
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
    await writeFile(join(DIST, 'sitemap.xml'), xml, 'utf-8');
    return entries.length;
}

/** Sert `dist/` avec repli SPA, comme le fera Vercel avant le pré-rendu. */
function startServer() {
    const server = createServer(async (req, res) => {
        const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
        const candidate = join(DIST, url);
        let file = null;

        if (extname(url) && existsSync(candidate)) file = candidate;
        else file = join(DIST, 'index.html');

        try {
            const body = await readFile(file);
            res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' });
            res.end(body);
        } catch {
            res.writeHead(404).end('not found');
        }
    });
    return new Promise((ok) => server.listen(PORT, () => ok(server)));
}

/**
 * Nettoie le HTML capturé.
 * - `html.preloading` : l'écran noir du preloader n'a pas à être l'état
 *   initial du document statique.
 * - `data-seo-ready` : signal interne, sans valeur pour un moteur.
 */
function clean(html) {
    return html
        .replace(/(<html[^>]*?)\sdata-seo-ready=""/i, '$1')
        .replace(/(<html[^>]*?class=")([^"]*)"/i, (_, head, classes) => {
            const kept = classes.split(/\s+/).filter((c) => c && c !== 'preloading').join(' ');
            return kept ? `${head}${kept}"` : head.replace(/\sclass="$/, '');
        });
}

/**
 * Ouvre un navigateur, avec deux chemins selon l'environnement.
 *
 * En local : le Chromium de Playwright, tout simplement.
 *
 * Sur Vercel : l'image de build est une Amazon Linux à laquelle il manque
 * `libnspr4.so` et les autres bibliothèques de Chromium. `playwright
 * install-deps` n'y sert à rien (sortie 127 : aucun gestionnaire de paquets),
 * et `--no-sandbox` ne change rien puisque le binaire ne se charge même pas.
 * `@sparticuz/chromium` fournit un Chromium qui embarque ses dépendances ;
 * c'est la même version majeure que celle de Playwright (153), qui le pilote
 * ensuite par CDP via `playwright-core`.
 */
async function launchBrowser() {
    const containerArgs = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
    ];

    if (!process.env.VERCEL && !process.env.CI) {
        const { chromium } = await import('playwright');
        return chromium.launch({ args: containerArgs });
    }

    const { chromium } = await import('playwright-core');
    const sparticuz = (await import('@sparticuz/chromium')).default;
    return chromium.launch({
        executablePath: await sparticuz.executablePath(),
        args: [...sparticuz.args, ...containerArgs],
        headless: true,
    });
}

async function main() {
    if (!existsSync(join(DIST, 'index.html'))) {
        console.error('[prerender] dist/index.html absent — lancer `vite build` d\'abord.');
        process.exit(1);
    }

    let browser;
    try {
        browser = await launchBrowser();
    } catch (error) {
        console.error("[prerender] Chromium n'a pas pu démarrer :");
        console.error(error.message.split('\n').slice(0, 8).join('\n'));
        console.error('[prerender] En local : `npx playwright install chromium`. Sinon `npm run build:spa`.');
        process.exit(1);
    }

    const routes = await collectRoutes();
    const server = await startServer();

    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const results = [];

    for (const { route } of routes) {
        try {
            await page.goto(`http://localhost:${PORT}${route}`, {
                waitUntil: 'networkidle',
                timeout: 30000,
            });
            await page.waitForSelector(SEO_READY, { timeout: 15000 });
            // `RouteSeo` vit dans App, donc son signal peut précéder l'arrivée
            // d'une route chargée à la demande : sans cette seconde attente, le
            // snapshot figerait le fallback vide de <Suspense>.
            await page.waitForFunction(() => document.body.innerText.trim().length > 400, {
                timeout: 15000,
            });

            const html = clean(await page.content());
            const outDir = route === '/' ? DIST : join(DIST, route);
            await mkdir(outDir, { recursive: true });
            await writeFile(join(outDir, 'index.html'), html, 'utf-8');

            const text = await page.evaluate(() => document.body.innerText.trim().length);
            results.push({ route, bytes: html.length, text });
        } catch (error) {
            results.push({ route, error: error.message.split('\n')[0] });
        }
    }

    // Page 404 : Vercel la sert avec le bon statut quand aucune route ne
    // correspond. Sans elle, une URL fautive renverrait 200 sur l'accueil.
    try {
        await page.goto(`http://localhost:${PORT}/__introuvable__`, { waitUntil: 'networkidle' });
        await page.waitForSelector(SEO_READY, { timeout: 15000 });
        await page.waitForFunction(() => document.body.innerText.trim().length > 400, { timeout: 15000 });
        await writeFile(join(DIST, '404.html'), clean(await page.content()), 'utf-8');
        results.push({ route: '404.html', bytes: 0, text: 0 });
    } catch (error) {
        console.warn(`[prerender] 404.html non généré : ${error.message.split('\n')[0]}`);
    }

    const sitemapCount = await writeSitemap(routes);

    await browser.close();
    server.close();

    const failed = results.filter((r) => r.error);
    for (const r of results.filter((r) => !r.error)) {
        console.log(`[prerender] ${r.route.padEnd(36)} ${String(r.bytes).padStart(7)} o  ${String(r.text).padStart(6)} car.`);
    }
    for (const r of failed) console.error(`[prerender] ÉCHEC ${r.route} — ${r.error}`);

    console.log(`[prerender] ${results.length - failed.length}/${results.length} pages écrites.`);
    console.log(`[prerender] sitemap.xml régénéré — ${sitemapCount} URLs.`);
    if (failed.length) process.exitCode = 1;
}

await main();
