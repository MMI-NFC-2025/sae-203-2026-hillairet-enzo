import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // On utilise l'intégration standard d'Astro pour Tailwind
  integrations: [tailwind()],
  adapter: netlify(),
});