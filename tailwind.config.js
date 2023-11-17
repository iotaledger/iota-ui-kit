/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{svelte,js,ts}'],
    presets: [require('./src/lib/tailwind.preset')],
}
