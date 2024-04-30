import type { ComponentProps } from 'svelte'
import type { AnchorLink, IconText } from '../../molecules'
import type { Align } from '$lib/enums'
import type { BottomStripType } from './hero.enums'

type TBottomStripProps = {
    align?: Align
    spaceBetween?: boolean
}

type IconBottomStrip = {
    type: BottomStripType.IconText
    items: ComponentProps<IconText>[]
}

type AnchorBottomStrip = {
    type: BottomStripType.AnchorLink
    items: ComponentProps<AnchorLink>[]
}

export type TBottomStrip = (IconBottomStrip | AnchorBottomStrip) & TBottomStripProps
