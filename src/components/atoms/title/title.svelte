<script lang="ts">
    import { TitleSize } from './title.enums'
    import { Position } from '$lib/enums'
    import {
        OVERLINE_TEXT,
        SUBTITLE_TEXT,
        TITLE_POSITIONS,
        TITLE_SIZES,
        TITLE_TEXT_COLORS,
    } from './title.classes'

    /**
     * The size of the title
     * @type {TitleSize}
     */
    export let size: TitleSize = TitleSize.H2
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

    $: sizeClass = TITLE_SIZES[size]
    $: positionClass = TITLE_POSITIONS[position]
    $: titleColorClass = !darkmode ? TITLE_TEXT_COLORS.title.light : TITLE_TEXT_COLORS.title.dark
    $: textColorClass = !darkmode ? TITLE_TEXT_COLORS.text.light : TITLE_TEXT_COLORS.text.dark
    $: subtitleTextClass = size === TitleSize.H5 ? SUBTITLE_TEXT.smaller : SUBTITLE_TEXT.default
    $: spaceBetweenClass = size === TitleSize.H6 ? 'space-y-6' : 'space-y-12'
</script>

<div class="flex flex-col font-medium {positionClass} {spaceBetweenClass}">
    {#if overline.length > 0}
        <span class="{OVERLINE_TEXT} {textColorClass}">{overline} </span>
    {/if}

    <span class="{titleColorClass} {sizeClass}">
        {title}
    </span>

    {#if subtitle.length > 0}
        <span class="{subtitleTextClass} {textColorClass}">
            {subtitle}
        </span>
    {/if}
</div>
