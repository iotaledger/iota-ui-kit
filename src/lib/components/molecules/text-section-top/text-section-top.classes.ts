import { TitleSize } from '$lib/components'
import { Direction, Mode } from '$lib/enums'

export const TEXT_COLORS: Record<Mode, string> = {
    [Mode.Light]: 'text-iota-gray-600',
    [Mode.Dark]: 'text-white',
}

export const DIRECTION_CLASSES = {
    [Direction.Row]: 'flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-28',
    [Direction.Column]: 'flex-col space-y-12 justify-start items-start text-left',
}

export const PADDING_TOP_WITH_OVERLINE_CLASSES = {
    [TitleSize.H2]: 'lg:pt-28',
    [TitleSize.H3]: 'lg:pt-[120px]',
    [TitleSize.H4]: 'lg:pt-28',
}

export const PADDING_TOP_WITHOUT_OVERLINE_CLASSES = {
    [TitleSize.H2]: 'lg:pt-16',
    [TitleSize.H3]: 'lg:pt-12',
    [TitleSize.H4]: 'lg:pt-8',
}
