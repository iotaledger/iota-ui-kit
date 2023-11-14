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
    href: { control: 'text' },
  },
} satisfies Meta<AnchorLink>

export default meta
type Story = StoryObj<typeof meta>

export const Anchor_Link_Dark: Story = {
  args: {
    label: 'Anchor Link',
    darkmode: true,
    icon: IconEnum.UpRightArrow,
    href: '#',
  },
}

export const Anchor_Link_Light: Story = {
  args: {
    label: 'Anchor Link',
    darkmode: false,
    icon: IconEnum.UpRightArrow,
    href: '#',
  },
}

