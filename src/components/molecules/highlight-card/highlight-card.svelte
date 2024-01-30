<script lang="ts">
    import { Title, IconEnum, Icon, TitleSize } from '$components'
    import { Position } from '$lib/enums'
    import { MediaManager, type Media } from '../media-manager'
    import { CONTENT_ALIGNMENT, CONTENT_JUSTIFICATION } from './highlight-card.classes'

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

    let isHovered: boolean = false

    $: alignmentClass = CONTENT_ALIGNMENT[position]
    $: justifyClass =
        description.length === 0 && position === Position.Center
            ? CONTENT_JUSTIFICATION.center
            : CONTENT_JUSTIFICATION.between
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
    this={link ? 'a' : 'div'}
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
    class="highlight-card {backgroundColor}"
    {...link ? { target: '_blank', href: link, role: 'link', tabindex: 0 } : {}}
>
    {#if backgroundMedia}
        <media-wrapper class="absolute inset-0 z-0">
            <MediaManager media={backgroundMedia} pointerEventsNone hoverPauseEnabled={isHovered} />
        </media-wrapper>
    {/if}
    {#if link}
        <icon-link-wrapper
            class="absolute z-[1] top-8 right-8 {isHovered
                ? 'top-6 right-6 '
                : ''} transition-all duration-500 ease-in-out"
        >
            <Icon icon={IconEnum.UpRightArrow} width={32} height={32} />
        </icon-link-wrapper>
    {/if}
    <content-wrapper class="flex flex-col space-y-6 z-[1] h-full {alignmentClass} {justifyClass}">
        <title-wrapper class="flex flex-col space-y-6">
            {#if icon}
                <Icon {icon} width={48} height={48} />
            {/if}
            <Title {title} {overline} {subtitle} {position} size={TitleSize.H6} darkmode />
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
