<script lang="ts">
  import { Icon } from '$atoms';
  import { ButtonSize, ButtonType } from '.';
  import type { IconEnum } from '../icon/icon.enums';
  import { TEXT_SIZES, VARIANT_COLORS } from './button.classes';

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

  function getClassesWithIconBasedOnSize() {
    if (icon && !label) {
      switch (size) {
        case ButtonSize.Small:
          return 'px-2 w-10 h-10';
        case ButtonSize.Medium:
          return 'px-2 w-12 h-12';
        case ButtonSize.Large:
          return 'px-2 w-14 h-14';
      }
    }
    return 'px-6';
  }
</script>

<button
  type="button"
  class="{textClasses} {colorClasses} {getClassesWithIconBasedOnSize()}"
  disabled="{disabled}"
  on:click
>
  {#if label}
    {label}
  {/if}
  {#if icon}
    <Icon icon={icon} />
  {/if}
</button>

<style lang="postcss">
  button {
    @apply font-medium rounded-sm inline-flex justify-center items-center gap-4;
    @apply py-2;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
</style>
