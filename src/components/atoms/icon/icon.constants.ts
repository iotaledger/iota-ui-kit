import type { ComponentType, SvelteComponent } from 'svelte'
import { IconEnum } from './icon.enums'
import { Bullet, UpRightArrow } from './icons'

export const ICON_MAP: Record<IconEnum, ComponentType<SvelteComponent>> = {
    [IconEnum.UpRightArrow]: UpRightArrow,
    [IconEnum.Bullet]: Bullet,
}
