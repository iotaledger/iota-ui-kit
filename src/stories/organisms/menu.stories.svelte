<script lang="ts" context="module">
    import type { Meta } from '@storybook/svelte'

    import { Menu as MenuComponent } from '$organisms'

    export const meta = {
        title: 'Organisms/Menu',
        component: MenuComponent,
        tags: ['autodocs'],
        argTypes: {
            darkmode: {
                control: {
                    type: 'boolean',
                },
            },
            menuItems: {
                control: {
                    type: 'array',
                },
            },
        },
    } satisfies Meta<MenuComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { CUSTOM_VIEWPORTS } from '$storybook/constants'
    import { ViewportsEnum } from '$storybook/enums'
    import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}

    <MenuComponent {...reactiveArgs}></MenuComponent>
</Template>

<Story
    name="Menu"
    parameters={{
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS, ...CUSTOM_VIEWPORTS },
            defaultViewport: ViewportsEnum.Screen,
        },
    }}
    args={{
        darkmode: $isDarkModeEnabled,
        menuItems: [
            {
                title: 'Products',
                href: '',
            },
            {
                title: 'Learn',
                href: '',
            },
            {
                title: 'Build',
                href: '',
            },
            {
                title: 'Discover',
                href: '',
            },
            {
                title: 'Foundation',
                href: 'https://www.iota.org',
                isExternal: true,
            },
        ],
    }}
/>
