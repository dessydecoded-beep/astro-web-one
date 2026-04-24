import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@dessy/dessyui', '@dessy/daisyui'],
    },
    ssr: {
      noExternal: ['@dessy/dessyui', '@dessy/daisyui'],
      optimizeDeps: {
        exclude: [
          '@astrojs/preact',
          '@astrojs/preact/server.js',
          '@dessy/dessyui',
          '@dessy/daisyui',
          'preact',
          'preact/hooks',
        ],
      },
    },
  },
});
