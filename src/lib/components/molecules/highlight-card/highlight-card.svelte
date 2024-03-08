<script lang="ts">
    import { IconEnum, Icon } from '$components'
    import { OVERLINE_TEXT } from '$components/atoms/title/title.classes'
    import { Position, Align } from '$lib/enums'
    import { isMobileDevice } from '$lib/utils'
    import { MediaManager, type Media } from '../media-manager'
    import {
        ALIGNMENT_WITH_ICON,
        CONTENT_ALIGNMENT,
        CONTENT_JUSTIFICATION,
        ITEMS_ALIGNMENT_CLASSES,
    } from './highlight-card.classes'

    /**
     * Title to display
     * @type {string}
     */
    export let title: string

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
    /**
     * The position of the content
     * @type {Position}
     */
    export let position: Position = Position.Start

    /**
     * Icon to display
     * @type {IconEnum}
     */
    export let icon: IconEnum | null = null

    /**
     * Link to navigate to
     * @type {string}
     */
    export let link: string | null = null

    /**
     * The media to display
     * @type {Media}
     */
    export let backgroundMedia: Media | null = null

    /**
     * Background color of the card
     * @type {string}
     */
    export let backgroundColor: string = 'bg-black'

    /**
     * Description of the card
     * @type string
     */
    export let description: string = ''

    /**
     * The alignment of the content
     */

    export let align: Align = Align.Center

    let isHovered: boolean = false

    $: itemsAlignClass = icon ? ALIGNMENT_WITH_ICON : ITEMS_ALIGNMENT_CLASSES[align]
    $: alignmentClass = CONTENT_ALIGNMENT[position]
    $: justifyClass =
        description.length === 0 && position === Position.Center
            ? CONTENT_JUSTIFICATION.center
            : CONTENT_JUSTIFICATION.between

    function handleMouseEnter(): void {
        if (!isMobileDevice()) {
            isHovered = true
        }
    }
    function handleMouseLeave(): void {
        if (!isMobileDevice()) {
            isHovered = false
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
    this={link ? 'a' : 'div'}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    class="highlight-card flex flex-col {backgroundColor} {itemsAlignClass}"
    {...link ? { target: '_blank', href: link, role: 'link', tabindex: 0 } : {}}
>
    {#if backgroundMedia}
        <media-wrapper class="absolute inset-0 z-0 text-2xl">
            <MediaManager media={backgroundMedia} pointerEventsNone playOnHover {isHovered} />
        </media-wrapper>
    {/if}
    {#if link}
        <icon-link-wrapper
            class="absolute z-[1] top-8 right-8 {isHovered
                ? 'translate-x-1 -translate-y-1'
                : ''} transition-all duration-300"
        >
            <Icon icon={IconEnum.ArrowTopRight} width={32} height={32} />
        </icon-link-wrapper>
    {/if}
    {#if icon}
        <span class="text-white flex" class:justify-center={position === Position.Center}>
            <Icon {icon} width={48} height={48} currentColor />
        </span>
    {/if}
    <content-wrapper class="flex flex-col space-y-6 z-[1] {alignmentClass} {justifyClass}">
        <title-wrapper class="flex flex-col space-y-6">
            <div
                class="flex flex-col font-medium space-y-6"
                class:text-center={position === Position.Center}
            >
                {#if overline.length > 0}
                    <span class="{OVERLINE_TEXT} text-white/80">{overline}</span>
                {/if}

                <h6 class="text-white text-4xl leading-44 font-medium">
                    {title}
                </h6>

                {#if subtitle.length > 0}
                    <span class="{OVERLINE_TEXT} text-white/80">
                        {subtitle}
                    </span>
                {/if}
            </div>
        </title-wrapper>
        {#if description}
            <p class="text-white/80">{description}</p>
        {/if}
    </content-wrapper>
</svelte:element>

<style lang="postcss">
    .highlight-card {
        min-width: 330px;
        max-width: 640px;
        height: 480px;
        aspect-ratio: 4/3;
        @apply flex flex-col w-full relative p-12 rounded-xl overflow-hidden;
    }
</style>
