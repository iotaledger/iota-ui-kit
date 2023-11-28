<script lang="ts" context="module">
  import { Button, ButtonSize, ButtonType } from "$components/atoms/buttons";
  export const meta = {
    title: "Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      type: {
        control: { type: "select" },
        options: Object.values(ButtonType),
      },
      size: {
        control: { type: "select" },
        options: Object.values(ButtonSize),
      },
      label: { control: "text" },
      darkmode: { control: "boolean" },
      disabled: { control: "boolean" },
      icon: {
        control: { type: "select" },
        options: Object.values(IconEnum),
      },
    },
  } satisfies Meta<Button>;
</script>

<script lang="ts">
  import { IconEnum } from "$components";
  import { darkMode } from "$lib/store";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import type { Meta } from "@storybook/svelte";
</script>

<Template let:args>
  {@const reactiveArgs = { ...args, darkmode: $darkMode }}
  <!--👇 'on:click' allows to forward event to addon-actions  -->
  <Button {...reactiveArgs}></Button>
</Template>

<Story
  name="Primary"
  args={{
    type: ButtonType.Primary,
    label: "Primary",
    size: ButtonSize.Medium,
    darkmode: $darkMode,
    disabled: false,
  }}
/>

<Story
  name="Secondary"
  args={{
    type: ButtonType.Secondary,
    label: "Secondary",
    size: ButtonSize.Medium,
    darkmode: $darkMode,
    disabled: false,
  }}
/>

<!-- TODO: add remaining stories -->