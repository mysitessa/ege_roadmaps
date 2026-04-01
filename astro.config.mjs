import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro runtime config.
//
// По умолчанию проект собирается как server output (node adapter) и запускается
// как standalone-сервер. Tailwind подключен через Vite plugin.
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
