<script lang="ts">
  import { Icon as IconComponent, IconEnum } from '$atoms';
  import { isDarkModeEnabled } from '$lib/storybook/stores';
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  
</script>

<Meta
  title="Atoms/Icon"
  component="{IconComponent}"
  autodocs
  argTypes="{{
    icon: { control: { type: 'select' }, options: Object.values(IconEnum) },
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
  }}"
/>
<Template let:args>
  <IconComponent {...args} fill={$isDarkModeEnabled ? '#ffffff' : '#000000'}/>
</Template>

<Story
  name="UpRightArrow"
  args="{{
    icon: IconEnum.UpRightArrow,
    width: 24,
    height: 24,
  }}"
/>