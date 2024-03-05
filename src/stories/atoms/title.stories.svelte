<script lang="ts" context="module">
    import { Title as TitleComponent } from '$components/atoms'
    import type { Meta } from '@storybook/svelte'

    export const meta = {
        title: 'Atoms/Title',
        component: TitleComponent,
        tags: ['autodocs'],
        argTypes: {
            size: {
                control: { type: 'select', labels: getEnumLabels(TitleSize) },
                options: Object.values(TitleSize),
            },
            position: {
                control: { type: 'select', labels: getEnumLabels(Position) },
                options: Object.values(Position),
            },
            title: { control: 'text' },
            subtitle: { control: 'text' },
            overline: { control: 'text' },
            tag: {
                control: { type: 'select', labels: getEnumLabels(TitleTag) },
                options: Object.values(TitleTag),
            },
        },
    } satisfies Meta<TitleComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { TitleSize, TitleTag } from '$components/atoms/title'
    import { Position } from '$lib/enums'
    import { getEnumLabels } from '$storybook/utils/map-enum-labels'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <TitleComponent {...reactiveArgs}></TitleComponent>
</Template>

<Story
    name="Title"
    args={{
        tag: TitleTag.H2,
        title: 'Title Text',
        subtitle: 'Subtitle Text',
        overline: 'Overline',
        position: Position.Start,
        darkmode: $isDarkModeEnabled,
    }}
/>
