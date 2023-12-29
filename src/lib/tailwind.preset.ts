import { CUSTOM_COLORS } from './constants/custom-colors.constants'
import { DEFAULT_COLORS } from './constants/default-colors.constants'

/**
 * One spacing unit is equal to 0.25rem, which translates to 4px
 * reference: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
 */
const toTailwindScale = (unit: number) => `${unit * 0.25}rem`

/* Utilities */
const pxToRem = (px: number, base: number = 16) => `${px / base}rem`

module.exports = {
    theme: {
        extend: {
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
