<script>
  import { isDarkModeEnabled } from '$lib/storybook/stores';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button, ButtonSize, ButtonType, IconEnum } from '../../components';
  
</script>

<Meta
  title="Atoms/Button"
  component="{Button}"
  autodocs
  argTypes="{{
    type: {
      control: { type: 'select' },
      options: Object.values(ButtonType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSize),
    },
    label: { control: 'text' },
    darkmode: {
      control: { type: 'boolean', default: $isDarkModeEnabled },
    },
    disabled: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: Object.values(IconEnum),
    },
  }}"
/>

<!-- <Template let:args>
  <Button
    {...args}
    darkmode="{$isDarkModeEnabled}"
  />
</Template>

<Story
  name="Primary"
  args="{{
    type: ButtonType.Primary,
    label: 'Primary',
    size: ButtonSize.Medium,
    darkmode: $isDarkModeEnabled,
    disabled: false,
  }}"
/> -->

<Story name="Secondary" let:args>
  <Button
    darkmode="{$isDarkModeEnabled}"
    type="{ButtonType.Secondary}"
    label="Secondary"
    size="{ButtonSize.Medium}"
    disabled="{false}"
  />
</Story>

<Story name="Ghost" let:args>
  <Button
    darkmode="{$isDarkModeEnabled}"
    type="{ButtonType.Ghost}"
    label="Ghost"
    size="{ButtonSize.Medium}"
    disabled="{false}"
  />
</Story>

<!-- <Story
  name="Ghost"
  args="{{
    type: ButtonType.Ghost,
    label: 'Ghost',
    size: ButtonSize.Medium,
    darkmode: $isDarkModeEnabled,
    disabled: false,
  }}"
/> -->

<!-- <Story
  name="Destructive"
  args="{{
    type: ButtonType.Destructive,
    label: 'Destructive',
    size: ButtonSize.Medium,
    darkmode: $isDarkModeEnabled,
    disabled: false,
  }}"
/>

<Story
  name="IconText"
  args="{{
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    darkmode: $isDarkModeEnabled,
    disabled: false,
    label: 'Button',
    icon: IconEnum.UpRightArrow,
  }}"
/>

<Story
  name="Icon"
  args="{{
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    disabled: false,
    icon: IconEnum.UpRightArrow,
  }}"
/> -->
