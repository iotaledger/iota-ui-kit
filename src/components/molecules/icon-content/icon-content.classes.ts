import { Direction, Mode } from '$lib/enums'

export const ICON_FILL = {
    [Mode.Light]: 'text-iota-blue-600',
    [Mode.Dark]: 'text-white',
}

export const TITLE_COLORS = {
    [Mode.Light]: 'text-iota-gray-900',
    [Mode.Dark]: 'text-white',
}

export const DESCRIPTION_COLORS = {
    [Mode.Light]: 'text-iota-gray-600',
    [Mode.Dark]: 'text-white',
}

export const DIRECTION_CLASSES = {
    [Direction.Row]: 'flex-row space-x-6',
    [Direction.Column]: 'flex-col space-y-6',
}
