import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        alias: {
            $components: 'src/lib/components',
            '$components/*': 'src/lib/components/*',
            $lib: 'src/lib',
            '$lib/*': 'src/lib/*',
            $atoms: 'src/lib/components/atoms',
            '$atoms/*': 'src/lib/components/atoms/*',
            $molecules: 'src/lib/components/molecules',
            '$molecules/*': 'src/lib/components/molecules/*',
            $organisms: 'src/lib/components/organisms',
            '$organisms/*': 'src/lib/components/organisms/*',
            $storybook: 'src/storybook',
            '$storybook/*': 'src/storybook/*',
        },
    },
}
