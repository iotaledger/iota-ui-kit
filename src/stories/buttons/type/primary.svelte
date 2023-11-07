<script lang="ts">
  import { ButtonSize } from "..";

  export let disabled: boolean = false
  export let label: string = ''
  export let size: string = ButtonSize.Medium
</script>

<button {disabled} on:click on:keydown tabindex="0" class="{size}">
  {label}
</button>

<style lang="postcss">
button {
    @apply text-white bg-iota-blue-700;
    @apply hover:bg-iota-blue-800;
    @apply active:bg-iota-blue-900;
    @apply disabled:opacity-50 disabled:bg-[#0001FD] disabled:cursor-not-allowed;
    &:focus {
      box-shadow: 0px 0px 0px 4px #3b82f6, 0px 0px 0px 2px #fff;
      @apply outline outline-1;
    }
  }
</style>
