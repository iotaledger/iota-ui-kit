<script>
  import { IconEnum } from '$components';
  import { isDarkModeEnabled } from '$lib/storybook/stores';
  import { IconText as IconTextComponent } from '$molecules';
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Molecules/IconText"
  component="{IconTextComponent}"
  autodocs
  argTypes="{{
    icon: { control: { type: 'select' }, options: Object.values(IconEnum) },
    darkmode: { control: { type: 'boolean' } },
    label: { control: 'text' },
  }}"
/>

<Template let:args>
  <IconTextComponent {...args} darkmode={$isDarkModeEnabled}/>
</Template>

<Story
  name="UpRightArrow"
  args="{{ icon: IconEnum.UpRightArrow, label: 'IconText'}}"
/>
