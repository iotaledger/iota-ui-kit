<script lang="ts" context="module">
    import { ButtonType, IconEnum } from '$components'
    import { TextSectionTop as TextSectionTopComponent } from '$molecules'

    export const meta = {
        title: 'Molecules/TextSectionTop',
        component: TextSectionTopComponent,
        decorators: [() => ({ Component: MarginDecorator })],
        tags: ['autodocs'],
        argTypes: {
            size: {
                control: { type: 'select' },
                options: Object.values(TitleSize),
            },
            title: { control: 'text' },
            subtitle: { control: 'text' },
            overline: { control: 'text' },
            description: { control: 'text' },
            direction: {
                control: { type: 'select' },
                options: Object.values(Direction),
            },
            buttons: {
                control: {
                    type: 'object',
                },
            },
            darkmode: {
                control: {
                    type: 'boolean',
                },
            },
        },
    } satisfies Meta<TextSectionTopComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
    import { TitleSize } from '$components/atoms/title'
    import { Direction } from '$lib/enums'
    import { MarginDecorator } from '$decorators'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <TextSectionTopComponent {...reactiveArgs}></TextSectionTopComponent>
</Template>

<Story
    name="TextSectionTop"
    args={{
        darkmode: $isDarkModeEnabled,
        size: TitleSize.H3,
        direction: Direction.Row,
        title: 'Title Text',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        overline: 'Overline',
        buttons: [
            {
                type: ButtonType.Primary,
                label: 'Button',
                icon: IconEnum.UpRightArrow,
            },
            {
                type: ButtonType.Secondary,
                label: 'Button',
                icon: IconEnum.UpRightArrow,
            },
        ],
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    }}
/>
