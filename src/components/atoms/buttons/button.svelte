<script lang="ts">
  import { ButtonSize, ButtonType } from '.';
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

  $: textClasses = TEXT_SIZES[size];
  $: colorClasses = !darkmode ? (VARIANT_COLORS[type].light ?? VARIANT_COLORS[type].dark) : VARIANT_COLORS[type].dark;
</script>

<button
  type="button"
  class="{textClasses} {colorClasses}"
  {disabled}
  on:click
>
  {label}
</button>

<style lang="postcss">
  button {
    @apply font-medium rounded-sm inline-block;
    @apply py-2 px-6;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
</style>
