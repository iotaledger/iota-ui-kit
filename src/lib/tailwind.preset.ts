import { CUSTOM_COLORS } from './constants/custom-colors.constants'
import { DEFAULT_COLORS } from './constants/default-colors.constants'

/**
 * One spacing unit is equal to 0.25rem, which translates to 4px
 * reference: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
 */
const toTailwindScale = (unit: number) => `${unit * 0.25}rem`

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
        },
    },
    plugins: [],
}
