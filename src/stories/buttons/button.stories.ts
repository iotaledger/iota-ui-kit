import type { Meta, StoryObj } from '@storybook/svelte';
import { ButtonSize, ButtonType } from '.';
import Button from './button.svelte';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [ButtonType.Primary, ButtonType.Ghost, ButtonType.Secondary, ButtonType.Destructive],
    },
    size: {
      control: { type: 'select' },
      options: [ButtonSize.Large, ButtonSize.Medium, ButtonSize.Small],
    },
    label: { control: 'text' },
    darkmode: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: 'Primary',
    },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    type: ButtonType.Ghost,
    label: 'Ghost',
  },
};

export const Destructive: Story = {
  args: {
    type: ButtonType.Destructive,
    label: 'Destructive',
  },
};

