<script lang="ts">
    import { TitleSize, TitleTag } from '$atoms/title'
    import { Button, Title } from '$components'
    import { TextSectionVariant } from './text-section.enums'
    import type { ComponentProps } from 'svelte'
    import {
        DIRECTION_CLASSES,
        PADDING_BOTTOM_CLASSES,
        PADDING_LEFT_CLASSES,
        PADDING_TOP_WITHOUT_OVERLINE_CLASSES,
        PADDING_TOP_WITH_OVERLINE_CLASSES,
        TEXT_COLORS,
    } from './text-section.classes'
    import { Direction } from '$lib/enums'
    import { HEADING_TO_SIZE, SIZE_TO_HEADING } from '$components/atoms/title/title.constants'

    /**
     * The title id
     */
    export let id: string | null = null
    /**
     * The title tag to use
     * @type {TitleTag}
     */
    export let titleTag: TitleTag | undefined = undefined
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
     * Title to display
     * @type {string}
     */
    export let title: string

    /**
     * Description to display
     * @type {string}
     */
    export let description: string = ''
    /**
     * Buttons to display
     * @type {ComponentProps<Button>[]}
     */
    export let buttons: ComponentProps<Button>[] = []

    /**
     * Content direction
     * @type {Direction}
     */
    export let direction: Direction = Direction.Row

    /**
     * Variant of the Component
     * @type {TextSectionVariant}
     */
    export let variant: TextSectionVariant = TextSectionVariant.Top

    let titleSize: TitleSize
    let titleTagFallback: TitleTag

    $: titleSize = size || (titleTag ? HEADING_TO_SIZE[titleTag] : TitleSize.Medium)
    $: titleTagFallback = titleTag || (size ? SIZE_TO_HEADING[size] : TitleTag.H3)
    $: textColorClass = !darkmode ? TEXT_COLORS.light : TEXT_COLORS.dark
    $: directionClass = DIRECTION_CLASSES[direction]
    $: paddingTopClass =
        direction === Direction.Row &&
        titleSize !== TitleSize.ExtraSmall &&
        (overline
            ? PADDING_TOP_WITH_OVERLINE_CLASSES[titleSize]
            : PADDING_TOP_WITHOUT_OVERLINE_CLASSES[titleSize])
    $: paddingLeftClass = PADDING_LEFT_CLASSES[direction]
    $: paddingBottomClass = PADDING_BOTTOM_CLASSES[variant]
</script>

<div class="flex w-full {directionClass} {paddingBottomClass}">
    <Title {id} size={titleSize} tag={titleTagFallback} {overline} {subtitle} {darkmode} {title} />
    {#if description || buttons.length > 0}
        <right-box
            class="flex flex-col text-left space-y-12 {paddingTopClass || ''} {paddingLeftClass}"
        >
            {#if description}
                <p class="leading-6 {textColorClass}">{description}</p>
            {/if}
            {#if buttons.length > 0}
                <buttons-wrapper class="flex space-x-4">
                    {#each buttons as button}
                        <Button {...button} {darkmode} />
                    {/each}
                </buttons-wrapper>
            {/if}
        </right-box>
    {/if}
</div>

<style lang="postcss">
    right-box {
        min-width: 312px;
        max-width: 588px;
    }
</style>
