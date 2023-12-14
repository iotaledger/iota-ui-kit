import { Mode } from '$lib/enums'
import { TitleSize, TitlePosition } from './title.enums'

export const TITLE_SIZES: Record<TitleSize, string> = {
    [TitleSize.H2]: 'text-8xl	leading-112',
    [TitleSize.H3]: 'text-7xl leading-88',
    [TitleSize.H4]: 'text-6xl leading-72',
    [TitleSize.H5]: 'text-5xl leading-58',
}

export const TITLE_POSITIONS: Record<TitlePosition, string> = {
    [TitlePosition.Start]: 'text-left',
    [TitlePosition.Center]: 'text-center',
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

export const TEXT_STYLES: string = 'text-lg leading-28'
