<script lang="ts" context="module">
    import { ButtonType, IconEnum } from '$components'
    import { TextSectionTop as TextSectionTopComponent } from '$molecules'

    type MarginDecoratorType = { Component: typeof MarginDecorator }

    export const meta = {
        title: 'Molecules/TextSectionTop',
        component: TextSectionTopComponent,
        decorators: [
            (): MarginDecoratorType => ({
                Component: MarginDecorator,
            }),
        ],
        tags: ['autodocs'],
        argTypes: {
            size: {
                control: { type: 'select', labels: getEnumLabels(TitleSize) },
                options: Object.values(TitleSize),
            },
            title: { control: 'text' },
            titleTag: {
                control: { type: 'select', labels: getEnumLabels(TitleTag) },
                options: Object.values(TitleTag),
            },
            subtitle: { control: 'text' },
            overline: { control: 'text' },
            description: { control: 'text' },
            direction: {
                control: { type: 'select', labels: getEnumLabels(Direction) },
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
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
    import { TitleSize, TitleTag } from '$components/atoms/title'
    import { Direction } from '$lib/enums'
    import { MarginDecorator } from '$decorators'
    import { getEnumLabels } from '$storybook/utils/map-enum-labels'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <TextSectionTopComponent {...reactiveArgs}></TextSectionTopComponent>
</Template>

<Story
    name="TextSectionTop"
    args={{
        darkmode: $isDarkModeEnabled,
        size: TitleSize.Medium,
        direction: Direction.Row,
        title: 'Title Text',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        overline: 'Overline',
        buttons: [
            {
                type: ButtonType.Primary,
                label: 'Button',
                icon: IconEnum.ArrowTopRight,
            },
            {
                type: ButtonType.Secondary,
                label: 'Button',
                icon: IconEnum.ArrowTopRight,
            },
        ],
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    }}
/>
