import type { ComponentType, SvelteComponent } from 'svelte'
import { IconEnum, IconSize } from './icon.enums'
import { UpRightArrow } from './icons'

export const ICON_MAP: Record<IconEnum, ComponentType<SvelteComponent>> = {
  [IconEnum.UpRightArrow]: UpRightArrow,
}

export const ICON_SIZE_MAP: Record<IconSize, number> = {
  [IconSize.Medium]: 24,
  [IconSize.Large]: 48,
}