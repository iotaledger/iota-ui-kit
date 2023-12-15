<script lang="ts" context="module">
    import { MenuItem as MenuItemComponent } from '$components'

    export const meta = {
        title: 'Atoms/Menu Item',
        component: MenuItemComponent,
        tags: ['autodocs'],
        argTypes: {
            title: {
                control: 'text',
            },
            href: {
                control: 'text',
            },
            isExternal: {
                control: 'boolean',
            },
            darkmode: {
                control: 'boolean',
            },
        },
    } satisfies Meta<MenuItemComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <MenuItemComponent {...reactiveArgs}></MenuItemComponent>
</Template>

<Story
    name="Menu Item"
    args={{
        title: 'Menu Item',
        href: '',
        darkmode: $isDarkModeEnabled,
    }}
/>
