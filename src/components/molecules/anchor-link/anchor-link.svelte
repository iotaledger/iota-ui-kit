<script lang="ts">
  import { Icon, type IconEnum } from '$atoms';
  import { Mode } from '$lib/enums';
  import { ICON_FILL, TEXT_COLORS } from '.';

  export let label: string;

  export let darkmode: boolean = false;
  /**
   * Link to
   * @type {string}
   */
  export let href: string;
  export let icon: IconEnum | null = null;

  $: mode = darkmode ? Mode.Dark : Mode.Light;
</script>

<anchor-link-wrapper as="a" href="{href}" class="flex py-4 pl-6 w-1/4">
  <anchor-link-content class="py-3 pr-6 flex items-center justify-between w-full border-r border-opacity-[0.16] border-black">
    <span class="text-lg font-medium leading-7 {TEXT_COLORS[mode]}">
      {label}
    </span>
    {#if icon}
      <Icon icon="{icon}" fill="{ICON_FILL[mode]}" />
    {/if}
  </anchor-link-content>
</anchor-link-wrapper>
