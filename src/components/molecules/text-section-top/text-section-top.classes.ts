import { Direction, Mode } from '$lib/enums'

export const TEXT_COLORS: Record<Mode, string> = {
    [Mode.Light]: 'text-iota-gray-900',
    [Mode.Dark]: 'text-white',
}

export const DIRECTION_CLASSES = {
    [Direction.Row]: 'flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-32 lg:items-center',
    [Direction.Column]: 'flex-col space-y-6 justify-start items-start text-left',
}
