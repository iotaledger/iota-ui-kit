<script lang="ts" context="module">
    import HighlightCardComponent from '$components/molecules/highlight-card/highlight-card-svelte.svelte'
    export const meta = {
        title: 'Molecules/HighlightCard Svelte Transition',
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
            position: {
                control: {
                    type: 'select',
                },
                options: Object.values(Position),
            },
            align: {
                control: {
                    type: 'select',
                    labels: getEnumLabels(Align),
                },
                options: Object.values(Align),
            },
            isExternal: {
                control: {
                    type: 'boolean',
                },
            },
            variant: {
                control: {
                    type: 'select',
                    labels: getEnumLabels(HighlightCardVariant),
                },
                options: Object.values(HighlightCardVariant),
            },
        },
    } satisfies Meta<HighlightCardComponent>
</script>

<script lang="ts">
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
    import { HighlightCardVariant, MediaType } from '$molecules'
    import { IconEnum } from '$components'
    import { Align, Position } from '$lib/enums'
    import { getEnumLabels } from '$storybook/utils/map-enum-labels'
</script>

<Template let:args>
    <HighlightCardComponent {...args}></HighlightCardComponent>
</Template>

<Story
    name="Highlight Card"
    args={{
        title: 'Send IOTA Tokens with Javascript',
        overline: 'Overline',
        subtitle: 'Subtitle',
        icon: IconEnum.Atom,
        backgroundMedia: {
            src: 'https://files.iota.org/media/ui-kit/cards/black/compressed/IOTA_card_black_6.mp4',
            type: MediaType.Video,
        },
        link: 'https://iota.org',
        description:
            'Allowing the EVM chain to communicate outside of the chain and interact, through the IOTA/Shimmer layer, with other chains and even non-EVM chain smart contracts',
    }}
/>

<Story
    name="Hoverable Highlight Card"
    args={{
        title: 'Send IOTA Tokens with Javascript',
        overline: 'Overline',
        subtitle: 'Subtitle',
        icon: IconEnum.Atom,
        variant: HighlightCardVariant.Hover,
        backgroundMedia: {
            src: 'https://files.iota.org/media/ui-kit/cards/black/compressed/IOTA_card_black_6.mp4',
            type: MediaType.Video,
        },
        description:
            'Allowing the EVM chain to communicate outside of the chain and interact, through the IOTA/Shimmer layer, with other chains and even non-EVM chain smart contracts',
    }}
/>
