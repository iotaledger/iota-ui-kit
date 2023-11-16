import { IconEnum } from '$components'
import { AnchorLink } from '$molecules'
import type { Meta, StoryObj } from '@storybook/svelte'

const meta = {
  title: 'Molecules/Anchor Link',
  component: AnchorLink,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    darkmode: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: Object.values(IconEnum),
    },
    href: { control: false },
  },
} satisfies Meta<AnchorLink>

export default meta
type Story = StoryObj<typeof meta>

export const Anchor_Link: Story = {
  args: {
    label: 'Anchor Link',
    darkmode: true,
    icon: IconEnum.UpRightArrow,
    href: '',
  },
}


