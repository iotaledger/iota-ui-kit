<script lang="ts">
  import { ButtonSize, ButtonType } from '.';
  import { BUTTON_TYPE } from './button.constants';

  export let type: ButtonType;
  export let size: ButtonSize = ButtonSize.Medium;
  export let label: string = '';
  export let darkmode: boolean = false;
  export let disabled: boolean = false;

  $: buttonSize = size ? `button--${size}` : '';
  $: buttonComponent = BUTTON_TYPE[type]
</script>

<svelte:component this={buttonComponent} {label} {disabled} on:click on:keydown role="button" tabindex="0" size={buttonSize} {darkmode}/>
