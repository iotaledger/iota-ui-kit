<script lang="ts">
  import { type IconEnum, IconSize } from './icon.enums'
  import { ICON_MAP, ICON_SIZE_MAP } from './icon.constants'
  /**
   * What fill to use
   * @type {string}
   */
  export let fill: string | undefined = undefined
  /**
   * Add the class fill-current to inherit the parent's color
   */
  export let fillCurrent: boolean = false

  /**
   * Size of the icon
   * @type {IconSize}
   */
  export let size: IconSize = IconSize.Medium

  /**
   * Selected Icon
   * @type {IconEnum}
   */
  export let icon: IconEnum
</script>

<svelte:component this={ICON_MAP[icon]} {fill} {fillCurrent} width={ICON_SIZE_MAP[size]} height={ICON_SIZE_MAP[size]} />
