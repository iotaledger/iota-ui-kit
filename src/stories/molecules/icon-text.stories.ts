import type { Meta, StoryObj } from '@storybook/svelte'

import { IconText as IconTextComponent } from '$molecules'
import { IconEnum } from '$components'

const meta = {
  title: 'Molecules/IconText',
  component: IconTextComponent,
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
} satisfies Meta<IconTextComponent>

export default meta

type Story = StoryObj<typeof meta>

export const IconText: Story = {
  args: {
    icon: IconEnum.UpRightArrow,
    label: 'IconText',
    darkmode: false,
  },
}
