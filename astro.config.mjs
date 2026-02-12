// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
        NAME: envField.string({ context: 'client', access: 'public', default: 'Nombre' }),
        URL: envField.string({ context: 'client', access: 'public', default: '' }),
        PRESENTATION_P_1: envField.string({ context: 'client', access: 'public', default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }),
        PRESENTATION_P_2: envField.string({ context: 'client', access: 'public', default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }),
        MINE_P_1: envField.string({ context: 'client', access: 'public', default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores, commodi explicabo aspernatur laboriosam dolorem corporis doloremque numquam nesciunt cum aliquid ipsum maxime iste autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores, commodi explicabo aspernatur laboriosam dolorem corporis doloremque numquam nesciunt cum aliquid ipsum maxime iste autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}),
        LETTER_HEADER_1: envField.string({ context: 'client', access: 'public', default: 'Un día soleado de primavera' }),
        LETTER_HEADER_2: envField.string({ context: 'client', access: 'public', default: 'Querida compañero' }),
        MUSIC_TITLE: envField.string({ context: 'client', access: 'public', default: 'Titulo' }),
        MUSIC_P_1: envField.string({ context: 'client', access: 'public', default: 'Parrafo 1'}),
        MUSIC_P_2: envField.string({ context: 'client', access: 'public', default: 'Parrafo 2'})
    }
  }
});