<script lang="ts" context="module">
    import { IconEnum, Icon as IconComponent } from '$atoms'
    export const meta = {
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
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, fill: $isDarkModeEnabled ? 'white' : 'currentColor' }}
    <IconComponent {...reactiveArgs}></IconComponent>
</Template>

<Story
    name="Icon"
    args={{
        icon: IconEnum.UpRightArrow,
        width: 24,
        height: 24,
    }}
/>
