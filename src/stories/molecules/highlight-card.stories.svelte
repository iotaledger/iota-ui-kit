<script lang="ts" context="module">
    import { HighlightCard as HighlightCardComponent } from '$molecules'
    export const meta = {
        title: 'Molecules/HighlightCard',
        component: HighlightCardComponent,
        tags: ['autodocs'],
        argTypes: {
            title: {
                control: {
                    type: 'text',
                },
            },
            overline: {
                control: {
                    type: 'text',
                },
            },
            subtitle: {
                control: {
                    type: 'text',
                },
            },
            icon: {
                control: {
                    type: 'select',
                },
                options: Object.values(IconEnum),
            },
            backgroundMedia: {
                control: {
                    type: 'object',
                },
            },
            link: {
                control: {
                    type: 'text',
                },
            },
            description: {
                control: {
                    type: 'text',
                },
            },
        },
    } satisfies Meta<HighlightCardComponent>
</script>

<script lang="ts">
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
    import { MediaType } from '$molecules'
    import { IconEnum } from '$components'
</script>

<Template let:args>
    <HighlightCardComponent {...args}></HighlightCardComponent>
</Template>

<Story
    name="Blogpost Card"
    args={{
        title: 'Send IOTA Tokens with Javascript',
        overline: 'Overline',
        subtitle: 'Subtitle',
        icon: IconEnum.Bullet,
        backgroundMedia: {
            src: 'https://lottie.host/f7277c23-b529-4c2a-ae08-0358068e792d/gbUnU4pWbh.json',
            type: MediaType.Animation,
        },
        link: 'https://iota.org',
        description:
            'Allowing the EVM chain to communicate outside of the chain and interact, through the IOTA/Shimmer layer, with other chains and even non-EVM chain smart contracts',
    }}
/>
