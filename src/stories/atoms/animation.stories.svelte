<script lang="ts" context="module">
    import { Animation as AnimationComponent } from '$components/atoms'
    import type { Meta } from '@storybook/svelte'

    export const meta = {
        title: 'Atoms/Animation',
        component: AnimationComponent,
        tags: ['autodocs'],
        argTypes: {
            src: { control: 'text' },
            autoplay: { control: 'boolean' },
            loop: { control: 'boolean' },
            renderer: {
                control: { type: 'select' },
                options: Object.values(RendererType),
            },
        },
    } satisfies Meta<AnimationComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { RendererType } from '$components/atoms'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <AnimationComponent {...reactiveArgs}></AnimationComponent>
</Template>

<Story name="Animation" />
