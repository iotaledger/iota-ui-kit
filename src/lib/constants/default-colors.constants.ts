/* eslint-disable @typescript-eslint/no-unused-vars */
import colors from 'tailwindcss/colors.js'

const {
    lightBlue,
    warmGray,
    trueGray,
    coolGray,
    blueGray,
    inherit,
    current,
    transparent,
    black,
    white,
    ...remainingColors
} = colors

export { remainingColors as DEFAULT_COLORS }
