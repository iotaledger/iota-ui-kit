import { IconSize } from '$components'
import { Mode } from '$lib/enums'

export const ICON_FILL = {
  [Mode.Light]: 'text-iota-blue-600',
  [Mode.Dark]: 'text-white',
}

export const TEXT_COLORS = {
  [Mode.Light]: 'text-iota-gray-900',
  [Mode.Dark]: 'text-white',
}

export const TEXT_SIZES = {
  [IconSize.Small]: 'text-sm',
  [IconSize.Medium]: 'text-md',
  [IconSize.Large]: 'text-lg',
}
