import { Mode } from '$lib/enums'
import { HeroContentSection, HeroVariant } from './hero.enums'

const LIGHT_TEXT_COLORS: Record<HeroContentSection, string> = {
    [HeroContentSection.Overline]: 'text-white',
    [HeroContentSection.Title]: 'text-white',
    [HeroContentSection.Subtitle]: 'text-white',
    [HeroContentSection.Paragraph]: 'text-white',
}

const DARK_TEXT_COLORS: Record<HeroContentSection, string> = {
    [HeroContentSection.Overline]: 'text-iota-gray-600',
    [HeroContentSection.Title]: 'text-iota-gray-900',
    [HeroContentSection.Subtitle]: 'text-iota-gray-600',
    [HeroContentSection.Paragraph]: 'text-iota-gray-600',
}

export const TEXT_COLORS: Record<HeroVariant, Record<Mode, Record<HeroContentSection, string>>> = {
    [HeroVariant.Primary]: {
        [Mode.Light]: DARK_TEXT_COLORS,
        [Mode.Dark]: LIGHT_TEXT_COLORS,
    },
    [HeroVariant.Secondary]: {
        [Mode.Dark]: DARK_TEXT_COLORS,
        [Mode.Light]: LIGHT_TEXT_COLORS,
    },
}

export const CONTENT_SECTION_CLASSES: Omit<Record<HeroContentSection, string>, 'title'> = {
    [HeroContentSection.Overline]: 'text-lg font-medium',
    [HeroContentSection.Subtitle]: 'text-2xl font-medium max-w-[480px]',
    [HeroContentSection.Paragraph]: 'text-base font-normal',
}
