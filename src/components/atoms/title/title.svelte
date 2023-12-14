<script lang="ts">
    import { TitleSize, TitlePosition } from './title.enums'
    import { TEXT_STYLES, TITLE_POSITIONS, TITLE_SIZES, TITLE_TEXT_COLORS } from './title.classes'

    export let size: TitleSize = TitleSize.H2
    export let overline: string = ''
    export let subtitle: string = ''
    export let darkmode: boolean = false
    export let position: TitlePosition = TitlePosition.Start
    export let title: string

    $: sizeClass = TITLE_SIZES[size]
    $: positionClass = TITLE_POSITIONS[position]
    $: titleColorClass = !darkmode ? TITLE_TEXT_COLORS.title.light : TITLE_TEXT_COLORS.title.dark
    $: textColorClass = !darkmode ? TITLE_TEXT_COLORS.text.light : TITLE_TEXT_COLORS.text.dark
</script>

<div class="flex flex-col space-y-12 font-medium {positionClass}">
    {#if overline.length > 0}
        <span class="{TEXT_STYLES} {textColorClass}">{overline} </span>
    {/if}

    <span class="{titleColorClass} {sizeClass}">
        {title}
    </span>

    {#if subtitle.length > 0}
        <span class="{TEXT_STYLES} {textColorClass}">
            {subtitle}
        </span>
    {/if}
</div>
