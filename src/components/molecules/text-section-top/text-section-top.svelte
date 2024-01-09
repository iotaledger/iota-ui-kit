<script lang="ts">
    import { TitleSize } from '$atoms/title'
    import { Button, Title } from '$components'
    import type { ComponentProps } from 'svelte'
    import {
        DIRECTION_CLASSES,
        PADDING_TOP_WITHOUT_OVERLINE_CLASSES,
        PADDING_TOP_WITH_OVERLINE_CLASSES,
        TEXT_COLORS,
    } from './text-section-top.classes'
    import { Direction } from '$lib/enums'

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
     * Title to display
     * @type {string}
     */
    export let title: string

    /**
     * Description to display
     * @type {string}
     */
    export let description: string
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

    $: textColorClass = !darkmode ? TEXT_COLORS.light : TEXT_COLORS.dark
    $: directionClass = DIRECTION_CLASSES[direction]
    $: paddingTopClass =
        size !== TitleSize.H5 &&
        (overline
            ? PADDING_TOP_WITH_OVERLINE_CLASSES[size]
            : PADDING_TOP_WITHOUT_OVERLINE_CLASSES[size])
</script>

<div class="flex w-full {directionClass}">
    <div class="lg:w-1/2">
        <Title {size} {overline} {subtitle} {darkmode} {title} />
    </div>
    <div class="flex flex-col text-left lg:w-1/2 space-y-12 {paddingTopClass}">
        <p class="leading-6 {textColorClass}">{description}</p>
        <buttons-wrapper class="flex space-x-4">
            {#each buttons as button}
                <Button {...button} {darkmode} />
            {/each}
        </buttons-wrapper>
    </div>
</div>
