// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [svelte(), tailwind()]
});