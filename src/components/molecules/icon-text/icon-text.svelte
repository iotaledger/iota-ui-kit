<script lang="ts">
  import { Icon, IconEnum, IconSize } from '$components'
  import { ICON_FILL, TEXT_COLORS, TEXT_SIZES } from './icon-text.classes'
  import { Mode } from '$lib/enums'
  
  /**
   * The icon to display
   * @type {IconEnum}
   */
  export let icon: IconEnum = IconEnum.UpRightArrow
  /**
   * Size of the icon
   * @type {IconSize}
   */
  export let size: IconSize = IconSize.Medium
  /**
   * Label to display
   * @type {string}
   */
  export let label: string = ''
  /**
   * Whether to use dark mode
   */
  export let darkmode: boolean = false

  $: mode = darkmode ? Mode.Dark : Mode.Light
</script>

<div class="flex flex-row space-x-2 items-center">
  <span class={ICON_FILL[mode]}>
    <Icon {icon} {size} currentColor />
  </span>
  <p class="{TEXT_COLORS[mode]} {TEXT_SIZES[size]}">{label}</p>
</div>
