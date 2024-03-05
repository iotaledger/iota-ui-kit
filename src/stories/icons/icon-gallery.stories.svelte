<script lang="ts" context="module">
    import type { Meta } from '@storybook/svelte'
    export const meta = {
        title: 'Icons/Icon Gallery',
        tags: ['autodocs'],
        argTypes: {
            fill: { control: 'color' },
            size: { control: { type: 'number', max: 100, min: 24 } },
            iconOutline: { control: 'boolean' },
        },
    } satisfies Meta
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { IconEnum } from '$atoms'
    import { IconExample, IconGallery } from '.'
</script>

<Template let:args>
    {@const reactiveArgs = {
        ...args,
        width: args.size,
        height: args.size,
        darkmode: $isDarkModeEnabled,
    }}
    <IconGallery {...reactiveArgs}>
        {#each Object.values(IconEnum) as icon}
            <IconExample {icon} {...reactiveArgs} name={icon} />
        {/each}
    </IconGallery>
</Template>

<Story
    name="Icon Gallery"
    args={{
        fill: $isDarkModeEnabled ? 'white' : 'black',
        size: 24,
        iconOutline: false,
    }}
/>
