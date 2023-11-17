import { Mode } from '$lib/enums'

export const ICON_FILL = {
    [Mode.Light]: 'text-iota-blue-600',
    [Mode.Dark]: 'text-white',
}

export const TEXT_COLORS = {
    [Mode.Light]: 'text-iota-gray-900',
    [Mode.Dark]: 'text-white',
}

export const BACKGROUND_COLORS = {
    [Mode.Light]: 'hover:bg-iota-blue-700 hover:bg-opacity-0.08 active:bg-iota-blue-700 active:bg-opacity-0.16',
    [Mode.Dark]: 'hover:bg-white hover:bg-opacity-0.08 active:bg-white active:bg-opacity-0.16',
}

export const BORDER_COLORS = {
    [Mode.Light]: 'border-black',
    [Mode.Dark]: 'border-white',
}
