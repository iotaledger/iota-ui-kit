<script lang="ts">
    import { Button, Title, TitleSize, TitleTag } from '$components/atoms'
    import { type Media } from '$components/molecules'
    import { IconText, AnchorLink, MediaManager } from '$components/molecules'
    import { Mode } from '$lib/enums'
    import { TEXT_COLORS, CONTENT_SECTION_CLASSES } from './hero.classes'
    import { HeroContentSection, HeroVariant } from './hero.enums'
    import type { ComponentProps } from 'svelte'
    import { Position } from '$lib/enums'

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
     * @type {string}
     *
     */
    export let title: string
    export let subtitle: string = ''
    export let paragraph: string = ''
    export let titleSize: TitleSize = TitleSize.Medium
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
     * @type {ComponentProps<IconText>[]}
     */
    export let iconFeatures: ComponentProps<IconText>[] = []

    /**
     * @type {ComponentProps<AnchorLink>[]}
     */
    export let anchorLinks: ComponentProps<AnchorLink>[] = []

    enum JustifyContent {
        Start = 'justify-start',
        Center = 'justify-center',
        End = 'justify-end',
        Between = 'justify-between',
    }

    let componentDarkmode: boolean | undefined

    $: isVariantPrimary = variant === HeroVariant.Primary
    $: mode = darkmode ? Mode.Dark : Mode.Light
    $: componentDarkmode = variant === HeroVariant.Primary ? darkmode : !darkmode
    $: justifyClass = getJustifyClass(isVariantPrimary, media)

    function getJustifyClass(isVariantPrimary: boolean, media: string | undefined): JustifyContent {
        if (isVariantPrimary) {
            if (media) {
                return JustifyContent.Between
            } else {
                return JustifyContent.Start
            }
        } else {
            return JustifyContent.Center
        }
    }
</script>

<section {id} class="min-h-screen flex items-stretch h-full bg-white relative pt-20 pb-8 md:pb-0">
    <div class="container mx-auto self-stretch">
        {#if backgroundMedia}
            <div class="absolute inset-0 z-0">
                <MediaManager media={backgroundMedia} pointerEventsNone />
            </div>
        {/if}

        <div class="flex flex-col relative h-full">
            <div class="flex flex-col py-18 h-full justify-center">
                <div
                    class="flex flex-col md:flex-row items-center md:space-x-6 mb-10 {justifyClass}"
                >
                    <div class="md:min-w-[472px] lg:min-w-[564px] xl:min-w-none">
                        <Title
                            id={titleId}
                            tag={titleTag}
                            size={titleSize}
                            {title}
                            {subtitle}
                            {overline}
                            position={!isVariantPrimary ? Position.Center : Position.Start}
                            darkmode={componentDarkmode}
                        />
                    </div>
                    {#if media && isVariantPrimary}
                        <div class="w-full xl:w-auto max-md:mt-[60px] md:mb-[67px]">
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

                {#if paragraph || buttons.length > 0}
                    <div
                        class="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-6 justify-between mt-auto pt-[60px] md:pt-0"
                    >
                        {#if paragraph}
                            <p
                                class="flex-1 max-w-[486px] text-left {TEXT_COLORS[variant][mode][
                                    HeroContentSection.Paragraph
                                ]}  {CONTENT_SECTION_CLASSES[HeroContentSection.Paragraph]}"
                            >
                                {paragraph}
                            </p>
                        {/if}
                        {#if buttons.length}
                            <div
                                class="flex flex-row flex-wrap md:flex-nowrap justify-start md:justify-end items-end gap-4"
                            >
                                {#each buttons as button}
                                    <Button {...button} darkmode={componentDarkmode} />
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
            {#if iconFeatures.length || anchorLinks.length}
                <div class="flex flex-col">
                    {#if iconFeatures.length}
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-x-12 gap-y-8 py-12 md:py-6">
                            {#each iconFeatures as iconFeature}
                                <IconText {...iconFeature} darkmode={componentDarkmode} />
                            {/each}
                        </div>
                    {/if}
                    {#if anchorLinks.length}
                        <nav class="grid grid-cols-1 gap-y-4 md:grid-cols-4 py-6 md:py-0">
                            {#each anchorLinks as anchorLink}
                                <AnchorLink {...anchorLink} darkmode={componentDarkmode} />
                            {/each}
                        </nav>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</section>
