import type { Meta, StoryObj } from '@storybook/svelte';

import { ButtonSize, ButtonType } from '.';
import Button from './button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [ButtonType.Primary, ButtonType.Secondary],
    },
    size: {
      control: { type: 'select' },
      options: [ButtonSize.Large, ButtonSize.Medium, ButtonSize.Small],
    },
    label: { control: 'text' },
    darkmode: { control: 'boolean' },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: 'Button',
  },
};
