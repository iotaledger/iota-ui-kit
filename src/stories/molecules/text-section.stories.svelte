<script lang="ts" context="module">
    import { ButtonType, IconEnum } from '$components'
    import { TextSection as TextSectionComponent, TextSectionVariant } from '$molecules'

    type MarginDecoratorType = { Component: typeof MarginDecorator }

    export const meta = {
        title: 'Molecules/TextSection',
        component: TextSectionComponent,
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
            variant: {
                control: { type: 'select', labels: getEnumLabels(TextSectionVariant) },
                options: Object.values(TextSectionVariant),
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
    } satisfies Meta<TextSectionComponent>
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
    <TextSectionComponent {...reactiveArgs}></TextSectionComponent>
</Template>

<Story
    name="TextSectionTop"
    args={{
        darkmode: $isDarkModeEnabled,
        direction: Direction.Row,
        title: 'Title Text',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        overline: 'Overline',
        variant: TextSectionVariant.Top,
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
<Story
    name="TextSectionLeft"
    args={{
        darkmode: $isDarkModeEnabled,
        direction: Direction.Column,
        title: 'Application Process',
        overline: 'Overline',
        variant: TextSectionVariant.Left,
        buttons: [
            {
                type: ButtonType.Primary,
                label: 'Apply',
                icon: IconEnum.ArrowTopRight,
            },
            {
                type: ButtonType.Secondary,
                label: 'See the full process',
                icon: IconEnum.ArrowTopRight,
            },
        ],
        description: 'Applying for a Grant made simple. Here is what to expect.',
    }}
/>
