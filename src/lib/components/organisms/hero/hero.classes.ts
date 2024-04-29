import { Mode } from '$lib/enums'
import { HeroVariant } from './hero.enums'

export const DARK_BODY_COLOR = 'text-white'
export const LIGHT_BODY_COLOR = 'text-iota-gray-900'

export const BODY_TEXT_COLOR = {
    [Mode.Dark]: DARK_BODY_COLOR,
    [Mode.Light]: LIGHT_BODY_COLOR,
}

export const ITEM_ALIGNMENT_CLASSES: Record<HeroVariant, string> = {
    [HeroVariant.Primary]: 'items-start',
    [HeroVariant.Secondary]: 'items-center',
}

export const POSITION_CLASSES: Record<HeroVariant, string> = {
    [HeroVariant.Primary]: 'justify-center md:justify-start',
    [HeroVariant.Secondary]: 'justify-center items-center',
}
