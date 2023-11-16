<script lang="ts">
  import { ICON_MAP, ICON_SIZE_MAP } from './icon.constants';
  import { IconSize, type IconEnum } from './icon.enums';
  /**
   * What fill to use
   * @type {string}
   */
  export let fill: string | undefined = undefined
  /**
  * Use current color as the primary color
   */
  export let currentColor: boolean = false
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

<svelte:component this={ICON_MAP[icon]} {fill} {currentColor} width={ICON_SIZE_MAP[size]} height={ICON_SIZE_MAP[size]} />
