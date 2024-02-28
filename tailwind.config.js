import uiKitPreset from './src/lib/tailwind/tailwind.preset'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{svelte,js,ts}'],
    presets: [uiKitPreset],
}
