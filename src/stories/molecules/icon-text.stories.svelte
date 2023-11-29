<script lang="ts" context="module">
    import { IconEnum } from '$components'
    import { IconText as IconTextComponent } from '$molecules'

    export const meta = {
        title: 'Molecules/IconText',
        component: IconTextComponent,
        tags: ['autodocs'],
        argTypes: {
            icon: {
                control: { type: 'select' },
                options: Object.values(IconEnum),
            },
            darkmode: {
                control: { type: 'boolean' },
            },
            label: { control: 'text' },
        },
    } satisfies Meta<IconTextComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <IconTextComponent {...reactiveArgs}></IconTextComponent>
</Template>

<Story
    name="IconText"
    args={{
        icon: IconEnum.UpRightArrow,
        label: 'IconText',
        darkmode: false,
    }}
/>
