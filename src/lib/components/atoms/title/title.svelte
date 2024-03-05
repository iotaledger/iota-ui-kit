<script lang="ts">
    import { TitleSize, TitleTag } from './title.enums'
    import { Position } from '$lib/enums'
    import {
        OVERLINE_TEXT,
        SUBTITLE_TEXT,
        TITLE_POSITIONS,
        TITLE_SIZES_BY_POSITION,
        TITLE_TEXT_COLORS,
    } from './title.classes'
    import { HEADING_TO_SIZE } from './title.constants'

    /**
     * The HTML tag to use for the title
     * @type {TitleTag}
     */
    export let tag: TitleTag = TitleTag.H2

    /**
     * The size of the title
     * @type {TitleSize}
     */
    export let size: TitleSize | undefined = undefined

    /**
     * The overline text to display
     * @type {string}
     */
    export let overline: string = ''
    /**
     * The subtitle text to display
     * @type {string}
     */
    export let subtitle: string = ''
    export let darkmode: boolean = false
    /**
     * The position of the title
     * @type {Position}
     */
    export let position: Position = Position.Start
    /**
     * Title to display
     * @type {string}
     */
    export let title: string

    let fallbackSize: TitleSize = HEADING_TO_SIZE[tag]

    $: fallbackSize = size || HEADING_TO_SIZE[tag]
    $: sizeClass = TITLE_SIZES_BY_POSITION[position][fallbackSize]
    $: positionClass = TITLE_POSITIONS[position]
    $: titleColorClass = !darkmode ? TITLE_TEXT_COLORS.title.light : TITLE_TEXT_COLORS.title.dark
    $: textColorClass = !darkmode ? TITLE_TEXT_COLORS.text.light : TITLE_TEXT_COLORS.text.dark
    $: subtitleTextClass =
        fallbackSize === TitleSize.ExtraSmall ? SUBTITLE_TEXT.smaller : SUBTITLE_TEXT.default
</script>

<div class="flex flex-col font-medium space-y-6 {positionClass} layout--{position}">
    {#if overline.length > 0}
        <span class="{OVERLINE_TEXT} {textColorClass}">{overline} </span>
    {/if}

    <svelte:element this={tag} class="{titleColorClass} {sizeClass}">
        {title}
    </svelte:element>

    {#if subtitle.length > 0}
        <span class="{subtitleTextClass} {textColorClass}">
            {subtitle}
        </span>
    {/if}
</div>

<style lang="postcss">
    .layout--start {
        max-width: 708px;
        min-width: 312px;
        @apply pr-6;
    }

    .layout--center {
        max-width: 800px;
        min-width: 312px;
    }
</style>
