// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
        NAME: envField.string({ context: 'client', access: 'public', default: 'Nombre' }),
        PARAGRAPHMINE: envField.string({ context: 'client', access: 'public', default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores, commodi explicabo aspernatur laboriosam dolorem corporis doloremque numquam nesciunt cum aliquid ipsum maxime iste autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores, commodi explicabo aspernatur laboriosam dolorem corporis doloremque numquam nesciunt cum aliquid ipsum maxime iste autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.'})
    }
  }
});