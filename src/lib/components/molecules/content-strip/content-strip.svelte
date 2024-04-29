<script lang="ts">
    import { AnchorLink, IconText, type TContentStrip } from '$components/molecules'
    import { Align } from '$lib/enums'
    import { ContentStripType } from './content-strip.enums'

    export let strip: TContentStrip
    export let darkmode: boolean = false
    export let spaceBetween: boolean = false
    export let align: Align = Align.Center

    const SEPARATION_CLASS: Record<ContentStripType, string> = {
        [ContentStripType.IconStrip]: 'space-y-6 md:space-y-0 md:space-x-20',
        [ContentStripType.AnchorStrip]: 'space-y-4 md:space-y-0 md:space-x-6',
    }

    const ALINGMENT_CLASS: Record<Align, string> = {
        [Align.Center]: 'justify-center',
        [Align.Start]: 'justify-start',
        [Align.End]: 'justify-end',
    }
</script>

<bottom-strip
    class="pb-6 w-full flex flex-col md:flex-row {SEPARATION_CLASS[strip.type]} {ALINGMENT_CLASS[
        strip.align ?? align
    ]}"
    class:justify-between={spaceBetween}
>
    {#if strip.type === ContentStripType.AnchorStrip}
        {#each strip.items as anchor}
            <AnchorLink {...anchor} {darkmode} />
        {/each}
    {:else}
        {#each strip.items as iconContent}
            <IconText {...iconContent} {darkmode} />
        {/each}
    {/if}
</bottom-strip>
