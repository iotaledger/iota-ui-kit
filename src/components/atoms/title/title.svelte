<script lang="ts">
    import { TitleSize, TitlePosition } from './title.enums'
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
     * @type {TitlePosition}
     */
    export let position: TitlePosition = TitlePosition.Start
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
</script>

<div class="flex flex-col space-y-6 lg:space-y-12 font-medium {positionClass}">
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
