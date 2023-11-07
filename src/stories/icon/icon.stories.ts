import type { Meta, StoryObj } from '@storybook/svelte'

import { default as IconComponent } from './icon.svelte'
import { IconEnum, IconSize } from './icon.enums'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
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

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Icon: Story = {
  args: {
    icon: IconEnum.UpRightArrow,
    size: IconSize.Medium,
    fill: '#000000',
  },
}
