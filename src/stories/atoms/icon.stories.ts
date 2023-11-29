import type { Meta, StoryObj } from '@storybook/svelte'

import { IconEnum } from '$atoms'
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
        width: {
            control: { type: 'number' },
        },
        height: {
            control: { type: 'number' },
        },
    },
} satisfies Meta<IconComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
    args: {
        icon: IconEnum.UpRightArrow,
        width: 24,
        height: 24,
        fill: '#000000',
    },
}
