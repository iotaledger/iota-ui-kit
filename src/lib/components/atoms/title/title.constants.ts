import { TitleSize, TitleTag } from '.'

export const HEADING_TO_SIZE: Record<TitleTag, TitleSize> = {
    [TitleTag.H1]: TitleSize.Large,
    [TitleTag.H2]: TitleSize.Medium,
    [TitleTag.H3]: TitleSize.Small,
    [TitleTag.H4]: TitleSize.ExtraSmall,
    [TitleTag.H5]: TitleSize.ExtraSmall,
    [TitleTag.H6]: TitleSize.ExtraSmall,
}

export const SIZE_TO_HEADING: Record<TitleSize, TitleTag> = {
    [TitleSize.Large]: TitleTag.H1,
    [TitleSize.Medium]: TitleTag.H2,
    [TitleSize.Small]: TitleTag.H3,
    [TitleSize.ExtraSmall]: TitleTag.H4,
}
