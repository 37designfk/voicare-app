// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://37designfk.github.io',
  base: '/voicare-app/',
  integrations: [tailwind()],
  server: { port: 4321 },
});
