<script lang="ts">
  import { ICON_MAP } from './icon.constants';
  import { type IconEnum } from './icon.enums';
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
   * Width of the icon
   */
  export let width: number = 24

  /**
   * Height of the icon
   */
  export let height: number = 24

  /**
   * Selected Icon
   * @type {IconEnum}
   */
  export let icon: IconEnum
</script>

<svelte:component this={ICON_MAP[icon]} {fill} {currentColor} {width} {height} />
