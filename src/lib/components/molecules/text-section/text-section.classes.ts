import { TitleSize } from '$lib/components'
import { TextSectionVariant } from './text-section.enums'
import { Direction, Mode } from '$lib/enums'

export const TEXT_COLORS: Record<Mode, string> = {
    [Mode.Light]: 'text-iota-gray-600',
    [Mode.Dark]: 'text-white',
}

export const DIRECTION_CLASSES = {
    [Direction.Row]: 'flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-28',
    [Direction.Column]: 'flex-col space-y-12 justify-start items-start text-left',
}

export const PADDING_TOP_WITH_OVERLINE_CLASSES: Partial<Record<TitleSize, string>> = {
    [TitleSize.Large]: 'lg:pt-28',
    [TitleSize.Medium]: 'lg:pt-[120px]',
    [TitleSize.Small]: 'lg:pt-28',
}

export const PADDING_TOP_WITHOUT_OVERLINE_CLASSES: Partial<Record<TitleSize, string>> = {
    [TitleSize.Large]: 'lg:pt-16',
    [TitleSize.Medium]: 'lg:pt-12',
    [TitleSize.Small]: 'lg:pt-8',
}

export const PADDING_LEFT_CLASSES: Record<Direction, string> = {
    [Direction.Row]: 'md:pl-[104px]',
    [Direction.Column]: 'pl-0',
}

export const PADDING_BOTTOM_CLASSES: Record<TextSectionVariant, string> = {
    [TextSectionVariant.Left]: 'pb-20',
    [TextSectionVariant.Top]: 'pb-30',
}
