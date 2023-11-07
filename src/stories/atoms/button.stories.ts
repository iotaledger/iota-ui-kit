import type { Meta, StoryObj } from '@storybook/svelte'
import { Button, ButtonSize, ButtonType } from '$components/atoms/buttons'

const meta = {
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
  },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: 'Secondary',
  },
}

export const Ghost: Story = {
  args: {
    type: ButtonType.Ghost,
    label: 'Ghost',
  },
}

export const Destructive: Story = {
  args: {
    type: ButtonType.Destructive,
    label: 'Destructive',
  },
}
