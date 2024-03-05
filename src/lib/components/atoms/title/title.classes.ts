import { Mode, Position } from '$lib/enums'
import { TitleSize } from './title.enums'

export const TITLE_SIZES: Record<TitleSize, string> = {
    [TitleSize.H2]: 'text-8xl leading-112',
    [TitleSize.H3]: 'text-7xl leading-88',
    [TitleSize.H4]: 'text-6xl leading-72',
    [TitleSize.H5]: 'text-5xl leading-58',
    [TitleSize.H6]: 'text-4xl leading-44',
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
