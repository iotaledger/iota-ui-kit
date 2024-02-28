import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            $components: '/src/lib/components',
            '$components/*': '/src/lib/components/*',
            $lib: '/src/lib',
            '$lib/*': '/src/lib/*',
            $atoms: '/src/lib/components/atoms',
            '$atoms/*': '/src/lib/components/atoms/*',
            $molecules: '/src/lib/components/molecules',
            '$molecules/*': '/src/lib/components/molecules/*',
            $organisms: '/src/lib/components/organisms',
            '$organisms/*': '/src/lib/components/organisms/*',
            $decorators: '/src/stories/decorators',
            '$decorators/*': '/src/stories/decorators/*',
            $storybook: '/src/storybook',
            '$storybook/*': '/src/storybook/*',
        },
    },
})
