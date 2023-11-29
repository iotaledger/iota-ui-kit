<script lang="ts" context="module">
    import { IconEnum } from '$components'
    import { AnchorLink as AnchorLinkComponent } from '$molecules'

    export const meta = {
        title: 'Molecules/Anchor Link',
        component: AnchorLinkComponent,
        tags: ['autodocs'],
        argTypes: {
            label: { control: 'text' },
            darkmode: { control: 'boolean' },
            icon: {
                control: { type: 'select' },
                options: Object.values(IconEnum),
            },
            href: { control: false },
        },
    } satisfies Meta<AnchorLinkComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <AnchorLinkComponent {...reactiveArgs}></AnchorLinkComponent>
</Template>

<Story
    name="AnchorLink"
    args={{
        label: 'Anchor Link',
        darkmode: true,
        icon: IconEnum.UpRightArrow,
        href: '',
    }}
/>
