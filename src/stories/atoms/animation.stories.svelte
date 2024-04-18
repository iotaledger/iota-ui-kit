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
            playOnHover: {
                control: 'boolean',
            },
            pointerEventsNone: {
                control: 'boolean',
            },
            backgroundColor: {
                control: 'color',
            },
            speed: {
                control: 'number',
            },
            direction: {
                control: { type: 'select' },
                options: [1, -1],
            },
        },
    } satisfies Meta<AnimationComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { RendererType } from '$components/atoms'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <AnimationComponent {...reactiveArgs}></AnimationComponent>
</Template>

<Story name="Animation" />
