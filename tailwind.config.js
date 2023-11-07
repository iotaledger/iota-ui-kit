/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'iota-blue': {
          50: '#F0F4FF',
          100: '#E0EAFF',
          200: '#C8DAFE',
          300: '#A6C3FC',
          400: '#82A5F8',
          500: '#5C84FA',
          600: '#2559F5',
          700: '#0101FF',
          800: '#0000DB',
          900: '#0101AB',
        },
        'iota-teal': {
          50: '#ECFFFF',
          100: '#BEFFFD',
          200: '#7DFFFC',
          300: '#38FFFA',
          400: '#00E5E0',
          500: '#00CCC7',
          600: '#009A97',
          700: '#007B78',
          800: '#006664',
          900: '#005654',
        },
        'iota-gray': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E1E7EF',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#65758B',
          600: '#48566A',
          700: '#344256',
          800: '#1D283A',
          900: '#0F1729',
        }
      },
      opacity: {
        0.08: '0.08',
        0.16: '0.16',
      },
    },
  },
  plugins: [],
}

