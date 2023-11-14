import { IconSize } from '$components'
import { IconTextSize } from './icon-text.enums'

export const ICON_TEXT_SIZE_MAP: Record<IconTextSize, IconSize> = {
  [IconTextSize.Small]: IconSize.Small,
  [IconTextSize.Medium]: IconSize.Medium,
  [IconTextSize.Large]: IconSize.Large,
}
