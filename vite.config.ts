import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $components: '/src/components',
      '$components/*': '/src/components/*',
      $lib: '/src/lib',
      '$lib/*': '/src/lib/*',
    },
  },
})
