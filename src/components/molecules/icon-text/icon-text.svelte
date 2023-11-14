<script lang="ts">
  import { Icon, IconEnum } from '$components'
  import { ICON_FILL, TEXT_COLORS, TEXT_SIZES } from './icon-text.classes'
  import { Mode } from '$lib/enums'
  import { IconTextSize } from './icon-text.enums'
  import { ICON_TEXT_SIZE_MAP } from './icon-text.constants'
  
  /**
   * The icon to display
   * @type {IconEnum}
   */
  export let icon: IconEnum = IconEnum.UpRightArrow
  /**
   * Size of the component
   * @type {IconTextSize}
   */
  export let size: IconTextSize = IconTextSize.Medium
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
  $: iconSize = ICON_TEXT_SIZE_MAP[size]
</script>

<div class="flex flex-row space-x-2 items-center">
  <span class={ICON_FILL[mode]}>
    <Icon {icon} size={iconSize} currentColor />
  </span>
  <p class="{TEXT_COLORS[mode]} {TEXT_SIZES[size]}">{label}</p>
</div>
