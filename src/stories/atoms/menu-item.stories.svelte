<script lang="ts" context="module">
    import { MenuItem as MenuItemComponent } from '$components'

    export const meta = {
        title: 'Atoms/Menu Item',
        component: MenuItemComponent,
        tags: ['autodocs'],
        argTypes: {
            title: {
                control: { type: 'text' },
            },
            href: {
                control: { type: 'text' },
            },
            isExternal: {
                control: { type: 'boolean' },
            },
            isActive: {
                control: { type: 'boolean' },
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
        title: 'Menu Item',
        darkmode: $isDarkModeEnabled,
    }}
/>
