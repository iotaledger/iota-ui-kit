/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScreenSize } from '../enums/screen-size.enum'
import colors from 'tailwindcss/colors.js'

export const CUSTOM_COLORS: Record<string, Record<number, string>> = {
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
    },
    'iota-red': {
        50: '#FFF8F8',
        100: '#FFE9E9',
        200: '#FFD3D3',
        300: '#FFB1B1',
        400: '#FF8383',
        500: '#FF5050',
        600: '#E73131',
        700: '#CF1919',
        800: '#8E0B0B',
        900: '#8A0000',
    },
}

interface IFontFamily {
    primary: string
    secondary: string
}

export const FONT_FAMILY_CLASS: IFontFamily = {
    primary: 'font-alliance-no2',
    secondary: 'font-inter',
}

export const BREAKPOINTS: Record<ScreenSize, number> = {
    [ScreenSize.Sm]: 768,
    [ScreenSize.Md]: 1024,
    [ScreenSize.Lg]: 1400,
    [ScreenSize.Xl]: 1920,
}

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
