<script lang="ts">
    import { Button, Title, TitleSize, TitleTag } from '$components/atoms'
    import { AnchorLink, IconText, MediaManager, type Media } from '$components/molecules'
    import { Align, Mode, Position } from '$lib/enums'
    import {
        BODY_TEXT_COLOR,
        POSITION_CLASSES,
        STRIP_ALINGMENT_CLASS,
        STRIP_SEPARATION_CLASS,
    } from './hero.classes'
    import { BottomStripType, HeroVariant } from './hero.enums'
    import type { ComponentProps } from 'svelte'
    import { FONT_FAMILY_CLASS } from '$lib/constants'
    import type { TBottomStrip } from './hero.types'

    /**
     * The variant of the component
     * @type {HeroVariant}
     */
    export let variant: HeroVariant = HeroVariant.Primary
    export let backgroundMedia: Media | undefined

    /**
     * The id of the component
     */
    export let id: string = 'hero'
    /**
     * The id of the title
     * @type {string}
     */
    export let titleId: string | null = null
    /**
     * Enforce darkmode
     * @type {boolean}
     */
    export let darkmode: boolean | undefined = undefined

    export let overline: string = ''
    /**
     * The title of the hero
     * @type {string}
     */
    export let title: string
    /**
     * The subtitle of the hero
     * @type {string}
     */
    export let subtitle: string = ''
    /**
     * The paragraph of the hero
     * @type {string}
     */
    export let paragraph: string = ''
    /**
     * The size of the title
     * @type {TitleSize}
     */
    export let titleSize: TitleSize = TitleSize.Medium
    /**
     * The tag of the title
     * @type {TitleTag}
     */
    export let titleTag: TitleTag = TitleTag.H1
    /**
     * Video to show on the right side of the component.
     * Only for the primary variant of the component.
     * @type {string}
     */
    export let media: string = ''

    /**
     * @type {ComponentProps<Button>[]}
     */
    export let buttons: ComponentProps<Button>[] = []

    /**
     * The content in the bottom strip
     * @type {TBottomStrip}
     */
    export let bottomStrip: TBottomStrip | undefined = undefined

    $: isVariantPrimary = variant === HeroVariant.Primary
    $: itemsPosition = variant === HeroVariant.Secondary ? Position.Center : Position.Start
    $: mode = darkmode ? Mode.Dark : Mode.Light
</script>

<section {id} class="flex flex-col relative h-full pt-[60px] md:pt-20">
    <div class="container mx-auto h-full flex flex-col space-y-6 flex-1">
        <div
            class="flex flex-col md:flex-row md:items-center h-full flex-1 {POSITION_CLASSES[
                variant
            ]}"
        >
            {#if backgroundMedia}
                <div class="absolute h-full w-full top-0 left-0 right-0 bottom-0 z-0">
                    <MediaManager media={backgroundMedia} pointerEventsNone />
                </div>
            {/if}

            <hero-title
                class="flex flex-col max-w-lg md:max-w-none md:w-1/2 space-y-12 items-center justify-center h-full z-[1]"
                class:md:pr-24={isVariantPrimary && media}
            >
                <Title
                    id={titleId}
                    size={titleSize}
                    tag={titleTag}
                    {overline}
                    {subtitle}
                    {darkmode}
                    {title}
                    position={itemsPosition}
                />
                {#if paragraph || buttons.length > 0}
                    <content-box class="flex flex-col text-left space-y-12">
                        {#if paragraph}
                            <p
                                class="leading-6 {BODY_TEXT_COLOR[
                                    mode
                                ]} {FONT_FAMILY_CLASS.secondary}"
                                class:text-center={itemsPosition === Position.Center}
                            >
                                {paragraph}
                            </p>
                        {/if}
                        {#if buttons.length > 0}
                            <buttons-wrapper
                                class="flex space-x-4"
                                class:justify-center={itemsPosition === Position.Center}
                            >
                                {#each buttons as button}
                                    <Button {...button} {darkmode} />
                                {/each}
                            </buttons-wrapper>
                        {/if}
                    </content-box>
                {/if}
            </hero-title>

            {#if media && variant === HeroVariant.Primary}
                <div class="w-full md:w-1/2 my-[72px] md:my-auto">
                    <video
                        controls
                        class="max-h-[377px] w-auto rounded-md border border-black/0.16 object-cover cursor-pointer"
                    >
                        <source src={media} type="video/mp4" />
                        <track kind="captions" />
                    </video>
                </div>
            {/if}
        </div>
        {#if bottomStrip}
            <bottom-strip
                class="pb-6 w-full flex flex-col md:flex-row z-[1] {STRIP_SEPARATION_CLASS[
                    bottomStrip.type
                ]} {STRIP_ALINGMENT_CLASS[
                    bottomStrip.align ?? isVariantPrimary ? Align.Start : Align.Center
                ]}"
                class:justify-between={bottomStrip.spaceBetween}
            >
                {#if bottomStrip.type === BottomStripType.AnchorLink}
                    {#each bottomStrip.items as anchor}
                        <AnchorLink {...anchor} {darkmode} />
                    {/each}
                {:else}
                    {#each bottomStrip.items as iconContent}
                        <IconText {...iconContent} {darkmode} />
                    {/each}
                {/if}
            </bottom-strip>
        {/if}
    </div>
</section>

<style lang="postcss">
    section {
        min-height: max(100vh, 800px);
    }
</style>
