<script lang="ts" context="module">
    import { IconEnum } from '$components'
    import { IconContent as IconContentComponent } from '$molecules'

    export const meta = {
        title: 'Molecules/IconContent',
        component: IconContentComponent,
        tags: ['autodocs'],
        argTypes: {
            icon: {
                control: { type: 'select' },
                options: Object.values(IconEnum),
            },
            darkmode: {
                control: { type: 'boolean' },
            },
            title: {
                control: { type: 'text' },
            },
            description: {
                control: { type: 'text' },
            },
            direction: {
                control: { type: 'select' },
                options: Object.values(Direction),
            },
        },
    } satisfies Meta<IconContentComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
    import { Direction } from '$lib/enums'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <IconContentComponent {...reactiveArgs}></IconContentComponent>
</Template>

<Story
    name="IconContent"
    args={{
        icon: IconEnum.Bullet,
        title: 'Content Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        darkmode: $isDarkModeEnabled,
    }}
/>
