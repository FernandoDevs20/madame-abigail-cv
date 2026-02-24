// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});