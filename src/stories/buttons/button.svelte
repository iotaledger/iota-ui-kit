<script lang="ts">
  import { ButtonSize, ButtonType } from '.';
  /**
   * Selected Button
   * @type {ButtonType}
   * @description The type of button to render
   */
  export let type: ButtonType;

  /**
   * Selected Button Size
   * @type {ButtonSize}
   * @description The size of button to render
   * @default ButtonSize.Medium
   */
  export let size: ButtonSize = ButtonSize.Medium;
  export let label: string = '';
  export let darkmode: boolean = false;
  export let disabled: boolean = false;

  const sizes = {
    [ButtonSize.Small]: 'text-sm leading-5',
    [ButtonSize.Medium]: 'text-base leading-6',
    [ButtonSize.Large]: 'text-lg leading-7',
  };

  const variantColor = {
    [ButtonType.Primary]: {
      light:
        'text-white bg-iota-blue-700 hover:bg-iota-blue-800 active:bg-iota-blue-900 focus:outline focus:outline-1 focus:box-shadow',
    },
    [ButtonType.Secondary]: {
      light:
        'text-iota-gray-900 border-[1.5px] border-iota-blue-400 hover:bg-iota-blue-700/[0.08] active:bg-iota-blue-700/[0.16] focus:outline-none focus:border-iota-blue-400 focus:box-shadow',
      dark: 'text-white border-[1.5px] border-iota-blue-400 hover:bg-white/[0.08] active:bg-white/[0.16]',
    },
    [ButtonType.Ghost]: {
      light:
        'text-iota-gray-900 hover:bg-iota-blue-700/[0.08] active:bg-iota-blue-700/[0.16]',
      dark: 'text-white hover:bg-white/[0.08] active:bg-white/[0.16]',
    },
    [ButtonType.Destructive]: {
      light:
        'text-white bg-[#E73333] hover:bg-[#D81A1A] active:bg-[#B21A1A] focus:outline focus:outline-1 focus:box-shadow',
    },
  };

  $: buttonSize = sizes[size];
  $: buttonType = darkmode && type !== ButtonType.Primary && type !== ButtonType.Destructive
    ? variantColor[type].dark ?? variantColor[type].light
    : variantColor[type].light;
</script>

<button
  type="button"
  class="{buttonSize} {buttonType}"
  disabled="{disabled}"
  on:click
>
  {label}
</button>

<style lang="postcss">
  button {
    @apply font-medium rounded-sm cursor-pointer inline-block;
    @apply py-2 px-6;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;

    .box-shadow {
      box-shadow: 0px 0px 0px 4px #3b82f6, 0px 0px 0px 2px #fff;
    }
  }
</style>
