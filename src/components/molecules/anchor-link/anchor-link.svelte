<script lang="ts">
  import { Icon, IconEnum } from '$atoms';
  import { Mode } from '$lib/enums';
  import { BACKGROUND_COLORS, BORDER_COLORS, ICON_FILL, TEXT_COLORS } from '.';
  /**
   * Label
   * @type {string}
   */
  export let label: string;
  export let darkmode: boolean = false;
  /**
   * Link to
   * @type {string}
   */
  export let href: string;
  /**
   * Selected Icon
   * @type {IconEnum}
   */
  export let icon: IconEnum = IconEnum.UpRightArrow;

  $: mode = darkmode ? Mode.Dark : Mode.Light;
</script>

<anchor-link-wrapper as="a" href="{href}" class="{BACKGROUND_COLORS[mode]}">
  <anchor-link-content class="{BORDER_COLORS[mode]}">
    <span class="{TEXT_COLORS[mode]}">
      {label}
    </span>
    <icon-wrapper>
      <div class={ICON_FILL[mode]}>
        <Icon icon="{icon}" currentColor />
      </div>
    </icon-wrapper>
  </anchor-link-content>
</anchor-link-wrapper>

<style lang="postcss">
  anchor-link-wrapper {
    @apply flex py-4 pl-6 w-full;
    @apply transition-all duration-200;
    @apply cursor-pointer;

    anchor-link-content {
      @apply py-3 pr-4 flex items-center justify-between w-full;
      @apply border-r border-opacity-0.16;

      span {
        @apply text-lg font-medium leading-7;
      }

      icon-wrapper {
        @apply rotate-90;
      }
    }
  }
</style>
