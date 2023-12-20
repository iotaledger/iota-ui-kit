<script lang="ts">
    import { Mode } from '$lib/enums'
    import { MediaManager, type Media } from '../media-manager'
    import { LABEL_COLORS, TITLE_COLORS } from './blogpost-card.classes'

    /**
     * Title to display
     */
    export let title: string
    /**
     * Labels to display (as an array of strings)
     */
    export let labels: string[]
    /**
     * Whether to use dark mode
     */
    export let darkmode: boolean = false
    /**
     * Media to display
     * @type {string}
     */
    export let media: Media

    $: mode = darkmode ? Mode.Dark : Mode.Light
</script>

<blogpost-card class="flex flex-col items-start justify-center w-full space-y-6">
    <media-wrapper class="aspect-video w-full overflow-hidden">
        <MediaManager {media} pointerEventsNone />
    </media-wrapper>
    <div class="flex flex-col items-start space-y-4">
        <labels-wrapper class="flex space-x-2 text-sm {LABEL_COLORS[mode]}">
            {#each labels as label, index}
                <p>
                    {label}
                </p>
                {#if index < labels.length - 1}
                    <p>|</p>
                {/if}
            {/each}
        </labels-wrapper>
        <p class="text-lg font-medium {TITLE_COLORS[mode]}">{title}</p>
    </div>
</blogpost-card>

<style lang="postcss">
    blogpost-card {
        min-width: 330px;
        max-width: 464px;
    }
</style>
