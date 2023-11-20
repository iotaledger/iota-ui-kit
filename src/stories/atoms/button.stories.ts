import { IconEnum } from '$components';
import { Button, ButtonSize, ButtonType } from '$atoms';
import { isDarkModeEnabled } from '$lib/storybook/stores';
import type { Meta, StoryObj } from '@storybook/svelte';
import { get } from 'svelte/store';
import { useArgs } from '@storybook/preview-api';

let darkmode = get(isDarkModeEnabled);
isDarkModeEnabled.subscribe((value) => {
  darkmode = value;
});

const meta: Meta<Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.values(ButtonType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSize),
    },
    label: { control: 'text' },
    darkmode: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: Object.values(IconEnum),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: 'Primary',
    size: ButtonSize.Medium,
    darkmode,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: 'Secondary',
    size: ButtonSize.Medium,
    darkmode,
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    type: ButtonType.Ghost,
    label: 'Ghost',
    size: ButtonSize.Medium,
    darkmode,
    disabled: false,
  },
};

export const Destructive: Story = {
  args: {
    type: ButtonType.Destructive,
    label: 'Destructive',
    size: ButtonSize.Medium,
    darkmode,
    disabled: false,
  },
};

export const IconText: Story = {
  args: {
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    darkmode,
    disabled: false,
    label: 'Button',
    icon: IconEnum.UpRightArrow,
  },
};

export const Icon: Story = {
  args: {
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    darkmode,
    disabled: false,
    icon: IconEnum.UpRightArrow,
  },
};
