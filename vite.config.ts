import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $atoms: '/src/components/atoms',
      '$atoms/*': '/src/components/atoms/*',
      $molecules: '/src/components/molecules',
      '$molecules/*': '/src/components/molecules/*',
    },
  },
})
