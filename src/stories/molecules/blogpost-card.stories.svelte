<script lang="ts" context="module">
    import { BlogpostCard as BlogpostCardComponent } from '$molecules'

    export const meta = {
        title: 'Molecules/BlogpostCard',
        component: BlogpostCardComponent,
        tags: ['autodocs'],
        argTypes: {
            title: {
                control: { type: 'text' },
            },
            description: {
                control: { type: 'text' },
            },
            href: {
                control: { type: 'text' },
            },
            isExternal: {
                control: { type: 'boolean' },
            },
            labels: {
                control: { type: 'array' },
            },
            media: {
                control: { type: 'object' },
            },
        },
    } satisfies Meta<BlogpostCardComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
    import { MediaType } from '$molecules'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <BlogpostCardComponent {...reactiveArgs}></BlogpostCardComponent>
</Template>

<Story
    name="Blogpost Card"
    args={{
        title: 'Send IOTA Tokens with Javascript',
        labels: ['Language', 'Product', 'Type'],
        media: {
            src: 'https://videos.ctfassets.net/xit7f234flxz/vWgyEvbf4sULsQJPaIKqf/a32fcfbefb146832045cb338f9b210b0/earth.webm',
            type: MediaType.Video,
        },
        darkmode: $isDarkModeEnabled,
    }}
/>
