import { Mode } from '$lib/enums'
import { ButtonSize, ButtonType } from '.'

export const TEXT_SIZES: Record<ButtonSize, string> = {
    [ButtonSize.Small]: 'text-sm leading-5 h-10',
    [ButtonSize.Medium]: 'text-base leading-6 h-12',
    [ButtonSize.Large]: 'text-lg leading-7 h-14',
}

export const VARIANT_COLORS: Record<ButtonType, { [Mode.Light]?: string; [Mode.Dark]?: string }> = {
    [ButtonType.Primary]: {
        [Mode.Dark]:
            'text-white hover:text-white bg-iota-blue-700 hover:bg-iota-blue-800 active:bg-iota-blue-900 focus:outline focus:outline-2 focus:outline-iota-blue-500 focus:outline-offset-2',
    },
    [ButtonType.Secondary]: {
        [Mode.Light]:
            'text-iota-gray-900 hover:text-iota-gray-900 border-[1.5px] border-iota-blue-400 hover:bg-iota-blue-700/0.08 active:bg-iota-blue-700/0.16',
        [Mode.Dark]:
            'text-white hover:text-white border-[1.5px] border-iota-blue-400 hover:bg-white/0.08 active:bg-white/0.16',
    },
    [ButtonType.Ghost]: {
        [Mode.Light]:
            'text-iota-gray-900 hover:text-iota-gray-900 hover:bg-iota-blue-700/0.08 active:bg-iota-blue-700/0.16',
        [Mode.Dark]: 'text-white hover:text-white hover:bg-white/0.08 active:bg-white/0.16',
    },
    [ButtonType.Destructive]: {
        [Mode.Dark]:
            'text-white hover:text-white bg-iota-red-600 hover:bg-iota-red-700 active:bg-iota-red-800 focus:outline focus:outline-2 focus:outline-iota-blue-500 focus:outline-offset-2',
    },
}

export const BUTTON_WITH_ICON: Record<ButtonSize, string> = {
    [ButtonSize.Small]: 'px-2 w-10',
    [ButtonSize.Medium]: 'px-2 w-12',
    [ButtonSize.Large]: 'px-2 w-14',
}
