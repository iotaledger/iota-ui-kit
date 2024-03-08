import { Align, Position } from '$lib/enums'

export const CONTENT_ALIGNMENT = {
    [Position.Start]: 'items-start text-left',
    [Position.Center]: 'items-center text-center',
}

export const CONTENT_JUSTIFICATION = {
    between: 'justify-between',
    center: 'justify-center',
}

export const ITEMS_ALIGNMENT_CLASSES: Record<Align, string> = {
    [Align.Start]: 'justify-start',
    [Align.Center]: 'justify-center',
    [Align.End]: 'justify-end',
}

export const ALIGNMENT_WITH_ICON = 'justify-between'
