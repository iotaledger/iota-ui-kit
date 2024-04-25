<script lang="ts">
    import { HighlightCardVariant, HighlightCard, IconEnum, MediaType } from '$components'
    import type { ComponentProps } from 'svelte'

    const props: ComponentProps<HighlightCard> = {
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
    }
</script>

<main>
    <section class="container">
        <HighlightCard {...props} />
    </section>
</main>
