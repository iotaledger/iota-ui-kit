import { DEFAULT_COLORS, CUSTOM_COLORS, BREAKPOINTS } from '../constants/tailwind.constants.js'

/**
 * One spacing unit is equal to 0.25rem, which translates to 4px
 * reference: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
 */
const toTailwindScale = (unit: number) => `${unit * 0.25}rem`

/* Utilities */
const pxToRem = (px: number, base: number = 16) => `${px / base}rem`

export default {
    theme: {
        container: {
            center: true,
            screens: {
                sm: `${BREAKPOINTS.sm}px`,
                md: `${BREAKPOINTS.md}px`,
                lg: `${BREAKPOINTS.lg}px`,
                xl: `${BREAKPOINTS.xl}px`,
            },
            padding: {
                DEFAULT: pxToRem(24),
                md: pxToRem(48),
                lg: pxToRem(120),
                xl: pxToRem(240),
            },
        },
        screens: {
            sm: `${BREAKPOINTS.sm}px`,
            md: `${BREAKPOINTS.md}px`,
            lg: `${BREAKPOINTS.lg}px`,
            xl: `${BREAKPOINTS.xl}px`,
        },
        extend: {
            fontFamily: {
                'alliance-no1': ['AllianceNo1', 'sans-serif'],
                'alliance-no2': ['AllianceNo2', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            padding: {
                18: toTailwindScale(18),
                30: toTailwindScale(30),
            },
            colors: { ...DEFAULT_COLORS, ...CUSTOM_COLORS },
            opacity: {
                0.08: '0.08',
                0.16: '0.16',
            },
            fontSize: {
                14: pxToRem(14),
                16: pxToRem(16),
                18: pxToRem(18),
                20: pxToRem(20),
                28: pxToRem(28),
                32: pxToRem(32),
                40: pxToRem(40),
                64: pxToRem(64),
            },
            lineHeight: {
                28: pxToRem(28),
                32: pxToRem(32),
                44: pxToRem(44),
                58: pxToRem(58),
                72: pxToRem(72),
                88: pxToRem(88),
                112: pxToRem(112),
            },
        },
    },
    plugins: [],
}
