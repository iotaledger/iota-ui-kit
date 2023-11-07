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
    @apply text-white bg-[#E73333];
    @apply hover:bg-[#D81A1A];
    @apply active:bg-[#B21A1A];
    @apply disabled:opacity-50 disabled:bg-[#E73333] disabled:cursor-not-allowed;
    &:focus {
      box-shadow: 0px 0px 0px 4px #3b82f6, 0px 0px 0px 2px #fff;
      @apply outline outline-1;
    }
  }
</style>
