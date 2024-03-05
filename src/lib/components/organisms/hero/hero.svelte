<script lang="ts">
    import { Button } from '$components/atoms'
    import { type Media } from '$components/molecules'
    import { IconText, AnchorLink, MediaManager } from '$components/molecules'
    import { Mode } from '$lib/enums'
    import { TEXT_COLORS, CONTENT_SECTION_CLASSES, TITLE_BOX_CLASSES } from './hero.classes'
    import { HeroContentSection, HeroVariant } from './hero.enums'
    import type { ComponentProps } from 'svelte'

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

    let componentDarkmode: boolean | undefined

    $: isVariantPrimary = variant === HeroVariant.Primary
    $: mode = darkmode ? Mode.Dark : Mode.Light
    $: componentDarkmode = variant === HeroVariant.Primary ? darkmode : !darkmode
</script>

<section {id} class="min-h-screen flex items-stretch h-full bg-white relative pt-20">
    <div class="container mx-auto self-stretch">
        {#if backgroundMedia}
            <div class="absolute inset-0 z-0">
                <MediaManager media={backgroundMedia} pointerEventsNone />
            </div>
        {/if}

        <div class="flex flex-col relative h-full">
            <div class="flex flex-col py-18 h-full justify-center">
                <div class="flex flex-row items-center justify-between space-x-6 mb-5">
                    {#if overline || title || subtitle}
                        <div class="flex flex-col space-y-12 {TITLE_BOX_CLASSES[variant]}">
                            {#if overline}
                                <span
                                    class="{TEXT_COLORS[variant][mode][
                                        HeroContentSection.Overline
                                    ]} {CONTENT_SECTION_CLASSES[HeroContentSection.Overline]}"
                                    >{overline}</span
                                >
                            {/if}

                            <h1
                                class="{TEXT_COLORS[variant][mode][
                                    HeroContentSection.Title
                                ]} {CONTENT_SECTION_CLASSES[HeroContentSection.Title]}"
                            >
                                {title}
                            </h1>

                            {#if subtitle}
                                <h4
                                    class="{TEXT_COLORS[variant][mode][
                                        HeroContentSection.Subtitle
                                    ]} {CONTENT_SECTION_CLASSES[HeroContentSection.Subtitle]}"
                                >
                                    {subtitle}
                                </h4>
                            {/if}
                        </div>
                    {/if}

                    {#if media && isVariantPrimary}
                        <video
                            width="589"
                            height="377"
                            controls
                            class="h-[377px] rounded-md border border-black/0.16 object-cover cursor-pointer"
                        >
                            <source src={media} type="video/mp4" />
                            <track kind="captions" />
                        </video>
                    {/if}
                </div>

                {#if paragraph || buttons.length > 0}
                    <div class="flex flex-row space-x-6 justify-between mt-auto">
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
                            <div class="flex-1 flex flex-row justify-end items-end space-x-4">
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
                        <div class="grid grid-cols-5 gap-x-12 py-6">
                            {#each iconFeatures as iconFeature}
                                <IconText {...iconFeature} darkmode={componentDarkmode} />
                            {/each}
                        </div>
                    {/if}
                    {#if anchorLinks.length}
                        <nav class="grid grid-cols-4">
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