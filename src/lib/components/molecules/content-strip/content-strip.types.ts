import type { ComponentProps } from 'svelte'
import type { ContentStripType } from './content-strip.enums'
import type { AnchorLink, IconText } from '..'
import type { Align } from '$lib/enums'

type ContentStripProps = {
    align?: Align
}

type IconBottomStrip = {
    type: ContentStripType.IconStrip
    items: ComponentProps<IconText>[]
}

type AnchorBottomStrip = {
    type: ContentStripType.AnchorStrip
    items: ComponentProps<AnchorLink>[]
}

export type TContentStrip = (IconBottomStrip | AnchorBottomStrip) & ContentStripProps
