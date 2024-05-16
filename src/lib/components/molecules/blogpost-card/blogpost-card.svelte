<script lang="ts">
    import { FONT_FAMILY_CLASS } from '$lib/constants'
    import { Mode } from '$lib/enums'
    import { MediaManager, type Media } from '../media-manager'
    import { TEXT_COLORS, TAG_BORDER_COLORS, TITLE_COLORS } from './blogpost-card.classes'

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
     * Labels to display (as an array of strings)
     * @type {string[]}
     */
    export let labels: string[] = []
    /**
     * Whether to use dark mode
     * @type {boolean}
     */
    export let darkmode: boolean = false
    /**
     * Media to display
     * @type {Media}
     */
    export let media: Media
    /**
     * Href to navigate to
     * @type {string}
     */
    export let href: string | null = null
    /**
     * Is the link external
     */
    export let isExternal: boolean = false

    $: mode = darkmode ? Mode.Dark : Mode.Light
    $: externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}
</script>

<svelte:element
    this={href ? 'a' : 'div'}
    {href}
    {...externalProps}
    class="blogpost-card flex flex-col items-start justify-center w-full space-y-6"
>
    <media-wrapper class="aspect-video w-full overflow-hidden rounded">
        <MediaManager {media} pointerEventsNone />
    </media-wrapper>
    <div class="flex flex-col items-start space-y-4 pr-8 w-full">
        <h6
            class="whitespace-pre-line text-lg font-medium {TITLE_COLORS[
                mode
            ]} {FONT_FAMILY_CLASS.primary}"
        >
            {title}
        </h6>
        {#if description}
            <p class="text-sm text-iota-gray-600 {TEXT_COLORS[mode]} {FONT_FAMILY_CLASS.secondary}">
                {description}
            </p>
        {/if}
        {#if labels.length}
            <labels-wrapper class="flex flex-wrap gap-2 {TEXT_COLORS[mode]}">
                {#each labels as label}
                    <p
                        class="py-1 px-3 border {TAG_BORDER_COLORS[
                            mode
                        ]} border-opacity-0.16 text-sm rounded-2xl"
                    >
                        {label}
                    </p>
                {/each}
            </labels-wrapper>
        {/if}
    </div>
</svelte:element>

<style lang="postcss">
    .blogpost-card {
        min-width: 312px;
        max-width: 464px;
    }
</style>
