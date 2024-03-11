import { Mode } from '$lib/enums'

export const MENU_ITEM_COLORS = {
    [Mode.Light]:
        'text-iota-gray-600 hover:text-iota-gray-600 border-b border-transparent hover:border-iota-gray-900/40 active:border-b active:border-iota-gray-900',
    [Mode.Dark]:
        'text-white/80 hover:text-white/80 border-b border-transparent hover:border-white/80 active:border-b active:border-white',
}
