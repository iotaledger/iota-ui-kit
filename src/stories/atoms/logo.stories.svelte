<script lang="ts" context="module">
    import { Logo as LogoComponent } from '$components'

    export const meta = {
        title: 'Atoms/Logo',
        component: LogoComponent,
        tags: ['autodocs'],
        argTypes: {
            width: {
                control: 'number',
            },
            height: {
                control: 'number',
            },
            darkmode: {
                control: 'boolean',
            },
        },
    } satisfies Meta<LogoComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <LogoComponent {...reactiveArgs}></LogoComponent>
</Template>

<Story
    name="Logo"
    args={{
        darkmode: $isDarkModeEnabled,
    }}
/>
