<script lang="ts" context="module">
    import { Title as TitleComponent } from '$components/atoms'
    import type { Meta } from '@storybook/svelte'

    export const meta = {
        title: 'Atoms/Title',
        component: TitleComponent,
        tags: ['autodocs'],
        argTypes: {
            size: {
                control: { type: 'select' },
                options: Object.values(TitleSize),
            },
            position: {
                control: { type: 'select' },
                options: Object.values(Position),
            },
            title: { control: 'text' },
            subtitle: { control: 'text' },
            overline: { control: 'text' },
        },
    } satisfies Meta<TitleComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { TitleSize } from '$components/atoms/title'
    import { Position } from '$lib/enums'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <TitleComponent {...reactiveArgs}></TitleComponent>
</Template>

<Story
    name="Title"
    args={{
        size: TitleSize.H2,
        title: 'Title Text',
        subtitle: 'Subtitle Text',
        overline: 'Overline',
        position: Position.Start,
        darkmode: $isDarkModeEnabled,
    }}
/>
