import { Mode } from '$lib/enums'

export const ICON_FILL = {
  [Mode.Dark]: '#2559F5',
  [Mode.Light]: 'white',
}

export const TEXT_COLORS = {
  [Mode.Dark]: 'text-iota-gray-900',
  [Mode.Light]: 'text-white',
}

export const BACKGROUND_COLORS = {
  [Mode.Dark]: 'hover:bg-iota-blue-700 hover:bg-opacity-[0.08] active:bg-iota-blue-700 active:bg-opacity-[0.16]',
  [Mode.Light]: 'hover:bg-white hover:bg-opacity-[0.08] active:bg-white active:bg-opacity-[0.16]',
}
