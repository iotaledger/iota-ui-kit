import { IconEnum } from '$components'
import { Button, ButtonSize, ButtonType } from '$components/atoms/buttons'
import type { Meta, StoryObj } from '@storybook/svelte'

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
    icon: {
      control: { type: 'select' },
      options: Object.values(IconEnum),
    },
  },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: 'Primary',
    size: ButtonSize.Medium,
    darkmode: true,
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: 'Secondary',
    size: ButtonSize.Medium,
    darkmode: false,
    disabled: false,
  },
}

export const Ghost: Story = {
  args: {
    type: ButtonType.Ghost,
    label: 'Ghost',
    size: ButtonSize.Medium,
    darkmode: false,
    disabled: false,
  },
}

export const Destructive: Story = {
  args: {
    type: ButtonType.Destructive,
    label: 'Destructive',
    size: ButtonSize.Medium,
    darkmode: true,
    disabled: false,
  },
}

export const IconText: Story = {
  args: {
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    darkmode: true,
    disabled: false,
    label: 'Button',
    icon: IconEnum.UpRightArrow,
  }
}

export const Icon: Story = {
  args: {
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    darkmode: true,
    disabled: false,
    icon: IconEnum.UpRightArrow,
  },
}
