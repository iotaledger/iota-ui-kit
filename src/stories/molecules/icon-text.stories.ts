import type { Meta, StoryObj } from '@storybook/svelte'

import { IconText } from '$molecules'
import { IconEnum } from '$components'

const meta = {
  title: 'Molecules/IconText',
  component: IconText,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.values(IconEnum),
    },
    darkmode: {
      control: { type: 'boolean' },
    },
    label: { control: 'text' },
  },
} satisfies Meta<IconText>

export default meta

type Story = StoryObj<typeof meta>

export const LightIconText: Story = {
  args: {
    icon: IconEnum.UpRightArrow,
    label: 'Light IconText',
    darkmode: false,
  },
}

export const DarkIconText: Story = {
  args: {
    icon: IconEnum.UpRightArrow,
    label: 'Dark IconText',
    darkmode: true,
  },
}
