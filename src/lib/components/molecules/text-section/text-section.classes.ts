import { TitleSize } from '$lib/components'
import { TextSectionVariant } from './text-section.enums'
import { Direction, Mode } from '$lib/enums'

export const TEXT_COLORS: Record<Mode, string> = {
    [Mode.Light]: 'text-iota-gray-600',
    [Mode.Dark]: 'text-white',
}

export const DIRECTION_CLASSES = {
    [Direction.Row]: 'flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-28',
    [Direction.Column]: 'flex-col space-y-12 justify-start items-start text-left',
}

export const PADDING_TOP_WITH_OVERLINE_CLASSES: Partial<Record<TitleSize, string>> = {
    [TitleSize.Large]: 'md:pt-28',
    [TitleSize.Medium]: 'md:pt-[120px]',
    [TitleSize.Small]: 'md:pt-28',
}

export const PADDING_TOP_WITHOUT_OVERLINE_CLASSES: Partial<Record<TitleSize, string>> = {
    [TitleSize.Large]: 'md:pt-16',
    [TitleSize.Medium]: 'md:pt-12',
    [TitleSize.Small]: 'md:pt-8',
}

export const PADDING_LEFT_CLASSES: Record<Direction, string> = {
    [Direction.Row]: 'md:pl-[104px]',
    [Direction.Column]: 'pl-0',
}

export const PADDING_BOTTOM_CLASSES: Record<TextSectionVariant, string> = {
    [TextSectionVariant.Left]: 'pb-20',
    [TextSectionVariant.Top]: 'pb-30',
}
