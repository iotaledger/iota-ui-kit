 <script lang="ts">
  import { ButtonSize, ButtonType } from '.';

  export let type: ButtonType 
  export let size: ButtonSize = ButtonSize.Medium;
  export let label: string = '';
  export let darkmode: boolean = false;

  $: buttonSize = size ? `button--${size}` : '';
  $: buttonType = darkmode && type !== ButtonType.Primary ? `button--${type}--darkmode` : `button--${type}`;

</script>

<button
  type="button"
  class="{buttonSize} {buttonType}"
  on:click
>
  {label}
</button>

<style lang="postcss">
button {
  @apply font-medium rounded-sm cursor-pointer inline-block;
  @apply py-2 px-6;
}
.button--primary {
  color: white;
  background-color: #0000DB;
}
.button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.button--small {
@apply text-sm leading-5;
}
.button--medium {
  @apply text-base leading-6;
}
.button--large {
  @apply text-lg leading-7;
}

</style>