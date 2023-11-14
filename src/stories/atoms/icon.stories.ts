import type { Meta, StoryObj } from '@storybook/svelte'

import { IconEnum, IconSize } from '$atoms'
import { Icon as IconComponent } from '$atoms'

const meta = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    fill: { control: 'color' },
    icon: {
      control: { type: 'select' },
      options: Object.values(IconEnum),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(IconSize),
    },
  },
} satisfies Meta<IconComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    icon: IconEnum.UpRightArrow,
    size: IconSize.Medium,
    fill: '#000000',
  },
}
