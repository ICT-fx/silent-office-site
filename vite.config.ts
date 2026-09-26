import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          /**
           * Le bundle partait en un seul fichier de 825 Ko. Deux problèmes :
           * un visiteur qui ne lit aucun article téléchargeait quand même les
           * six articles, et la moindre correction de copy invalidait le cache
           * de React et de Framer Motion en même temps.
           *
           * Les bibliothèques changent rarement, le code applicatif souvent :
           * les séparer laisse le navigateur garder les premières d'une visite
           * à l'autre. Les routes lourdes sont chargées à la demande depuis
           * `src/App.tsx`, ce qui sort leur poids du chemin critique.
           */
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
            icons: ['lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 350,
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  };
});
