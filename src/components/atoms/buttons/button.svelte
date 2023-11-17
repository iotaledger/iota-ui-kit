<script lang="ts">
  import { Icon } from '$atoms';
  import { darkMode } from '$lib/store';
  import { ButtonSize, ButtonType } from '.';
  import type { IconEnum } from '../icon/icon.enums';
  import {
    BUTTON_WITH_ICON,
    TEXT_SIZES,
    VARIANT_COLORS,
  } from './button.classes';

  /**
   * The type of button
   * @type {ButtonType}
   */
  export let type: ButtonType;

  /**
   * The size of the button
   * @type {ButtonSize}
   */
  export let size: ButtonSize = ButtonSize.Medium;

  /**
   * Content of the button
   * @type {string}
   */
  export let label: string = '';
  export let darkmode: boolean = false;
  export let disabled: boolean = false;
  /**
   * Selected Icon
   * @type {IconEnum}
   */
  export let icon: IconEnum | null = null;

  $: textClasses = TEXT_SIZES[size];
  $: colorClasses = !darkmode
    ? VARIANT_COLORS[type].light ?? VARIANT_COLORS[type].dark
    : VARIANT_COLORS[type].dark;
  $: iconClasses = icon && !label ? BUTTON_WITH_ICON[size] : 'px-6';
  $: darkmode = $darkMode;
</script>

<button
  type="button"
  class="{textClasses} {colorClasses} {iconClasses}"
  disabled="{disabled}"
  on:click
>
  {#if label}
    {label}
  {/if}
  {#if icon}
    <Icon icon="{icon}" />
  {/if}
</button>

<style lang="postcss">
  button {
    @apply font-medium rounded-sm inline-flex justify-center items-center gap-4;
    @apply py-2;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
</style>
