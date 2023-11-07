<script lang="ts">
  import { ButtonSize } from "..";

  export let disabled: boolean = false
  export let label: string = ''
  export let darkmode: boolean = false
  export let size: string = ButtonSize.Medium

  $: darkmodeClass = darkmode ? 'darkmode' : ''
</script>

<button {disabled} on:click on:keydown tabindex="0" class="{size} {darkmodeClass}">
  {label}
</button>

<style lang="postcss">
  button {
    @apply text-iota-gray-900 border-[1.5px] border-iota-blue-400;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
    @apply hover:bg-iota-blue-700/[0.08];
    @apply active:bg-iota-blue-700/[0.16];
    &:focus {
      box-shadow: 0px 0px 0px 2px #3b82f6, 0px 0px 0px 2px #fff;
      @apply outline-none border-iota-blue-400;
    }
    &.darkmode {
      @apply text-white border-[1.5px] border-iota-blue-400;
      @apply disabled:opacity-50 disabled:cursor-not-allowed;
      &:hover {
        background-color: rgb(255 255 255 / 0.08);
      }
      &:active {
        background-color: rgb(255 255 255 / 0.16);
      }
    }
  }
</style>
