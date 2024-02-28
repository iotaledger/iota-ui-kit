<script lang="ts" context="module">
    import { MenuItem as MenuItemComponent } from '$components'

    export const meta = {
        title: 'Atoms/Menu Item',
        component: MenuItemComponent,
        tags: ['autodocs'],
        argTypes: {
            menuItem: {
                description: 'Menu item',
                control: {
                    type: 'object',
                },
            },
        },
    } satisfies Meta<MenuItemComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
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
        menuItem: {
            title: 'Menu Item',
            href: '#',
            darkmode: $isDarkModeEnabled,
        },
    }}
/>
