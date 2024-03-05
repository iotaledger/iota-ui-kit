<script lang="ts" context="module">
    import type { Meta } from '@storybook/svelte'
    export const meta = {
        title: 'Icons/Icons Gallery',
        tags: ['autodocs'],
        argTypes: {
            fill: { control: 'color' },
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
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <IconGallery {...reactiveArgs}>
        {#each Object.entries(IconEnum) as [name, icon]}
            <IconExample {icon} {...reactiveArgs} {name} />
        {/each}
    </IconGallery>
</Template>

<Story
    name="Icon Gallery"
    args={{
        fill: $isDarkModeEnabled ? 'white' : 'black',
    }}
/>
