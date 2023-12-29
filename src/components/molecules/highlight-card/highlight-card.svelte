<script lang="ts">
    import { Title, IconEnum, Icon, TitleSize } from '$components'
    import { Position } from '$lib/enums'
    import { MediaManager, type Media } from '../media-manager'
    import { CONTENT_ALIGNMENT, CONTENT_JUSTIFICATION } from './highlight-card.classes'

    /**
     * Title to display
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

    let isHovered: boolean = true

    $: alignmentClass = CONTENT_ALIGNMENT[position]
    $: justifyClass =
        description.length === 0 && position === Position.Center
            ? CONTENT_JUSTIFICATION.center
            : CONTENT_JUSTIFICATION.between
</script>

{#if link}
    <a
        href={link}
        target="_blank"
        on:mouseenter={() => (isHovered = true)}
        on:mouseleave={() => (isHovered = false)}
    >
        <highlight-card class={backgroundColor}>
            {#if backgroundMedia}
                <media-wrapper>
                    <MediaManager
                        media={backgroundMedia}
                        pointerEventsNone
                        {isHovered}
                        hoverPauseEnabled
                    />
                </media-wrapper>
            {/if}
            <icon-link-wrapper>
                <Icon icon={IconEnum.UpRightArrow} width={32} height={32} />
            </icon-link-wrapper>
            <content-wrapper class="{alignmentClass} {justifyClass}">
                <title-wrapper>
                    {#if icon}
                        <Icon {icon} width={48} height={48} />
                    {/if}
                    <Title {title} {overline} {subtitle} {position} size={TitleSize.H6} darkmode />
                </title-wrapper>
                {#if description}
                    <p>{description}</p>
                {/if}
            </content-wrapper>
        </highlight-card>
    </a>
{:else}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <highlight-card
        on:mouseenter={() => (isHovered = true)}
        on:mouseleave={() => (isHovered = false)}
        class={backgroundColor}
    >
        {#if backgroundMedia}
            <media-wrapper>
                <MediaManager
                    media={backgroundMedia}
                    pointerEventsNone
                    {isHovered}
                    hoverPauseEnabled
                />
            </media-wrapper>
        {/if}
        <content-wrapper class="{alignmentClass} {justifyClass}">
            <title-wrapper>
                {#if icon}
                    <Icon {icon} width={48} height={48} />
                {/if}
                <Title {title} {overline} {subtitle} {position} size={TitleSize.H6} darkmode />
            </title-wrapper>
            {#if description}
                <p>{description}</p>
            {/if}
        </content-wrapper>
    </highlight-card>
{/if}

<style lang="postcss">
    highlight-card {
        min-width: 330px;
        max-width: 600px;
        height: 480px;
        aspect-ratio: 4/3;
        @apply flex flex-col w-full relative p-12 rounded-xl overflow-hidden;

        media-wrapper {
            @apply absolute inset-0 z-0;
        }

        icon-link-wrapper {
            @apply absolute z-[1] top-8 right-8;
        }
        content-wrapper {
            @apply flex flex-col space-y-6 z-[1] h-full;

            title-wrapper {
                @apply flex flex-col space-y-6;
            }

            p {
                @apply text-white/80;
            }
        }
    }
</style>
