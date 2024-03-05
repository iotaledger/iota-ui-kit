import { Mode, Position } from '$lib/enums'
import { TitleSize } from './title.enums'

const TITLE_SIZES_START_POSITION: Record<TitleSize, string> = {
    [TitleSize.Large]: 'text-6xl leading-72 sm:text-8xl sm:leading-112',
    [TitleSize.Medium]: 'text-5xl leading-58 sm:text-7xl sm:leading-88',
    [TitleSize.Small]: 'text-4xl leading-44 sm:text-6xl sm:leading-72',
    [TitleSize.ExtraSmall]: 'text-3xl leading-9 sm:text-5xl sm:leading-58',
}

const TITLE_SIZES_CENTER_POSITION: Record<TitleSize, string> = {
    ...TITLE_SIZES_START_POSITION,
    [TitleSize.ExtraSmall]: 'text-3xl leading-9 xs:text-6xl xs:leading-72',
}

export const TITLE_SIZES_BY_POSITION: Record<Position, Record<TitleSize, string>> = {
    [Position.Start]: TITLE_SIZES_START_POSITION,
    [Position.Center]: TITLE_SIZES_CENTER_POSITION,
}

export const TITLE_POSITIONS: Record<Position, string> = {
    [Position.Start]: 'text-left',
    [Position.Center]: 'text-center',
}

export const TITLE_TEXT_COLORS: Record<string, { [Mode.Light]?: string; [Mode.Dark]?: string }> = {
    title: {
        [Mode.Light]: 'text-iota-gray-900',
        [Mode.Dark]: 'text-white',
    },
    text: {
        [Mode.Light]: 'text-iota-gray-600',
        [Mode.Dark]: 'text-white opacity-80',
    },
}

export const OVERLINE_TEXT: string = 'text-lg leading-28'

export const SUBTITLE_TEXT: Record<string, string> = {
    default: 'text-2xl leading-32',
    smaller: 'text-xl leading-28',
}
