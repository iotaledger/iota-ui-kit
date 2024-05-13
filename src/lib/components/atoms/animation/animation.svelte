<script lang="ts">
    import Lottie, { type AnimationDirection, type AnimationItem } from 'lottie-web'
    import { onMount } from 'svelte'
    import { RendererType } from './animation.enums'
    import { isMobile } from '$lib/stores'

    export let src: string =
        'https://lottie.host/05761115-2753-4236-8e02-049e9b61969f/X6gyzVzo8S.json'
    export let autoplay: boolean = true
    /**
     * The renderer of the animation.
     * @type {RendererType}
     */
    export let renderer: RendererType = RendererType.Svg
    /**
     * Whether the animation should loop.
     */
    export let loop: boolean = true
    /**
     * Whether the animation should play on hover.
     */
    export let pointerEventsNone: boolean = false
    /**
     * The background color of the animation.
     */
    export let backgroundColor: string = 'transparent'
    /**
     * Whether the animation should play on hover.
     */
    export let playOnHover: boolean = false
    /**
     * Whether the animation is hovered.
     */
    export let isHovered: boolean = false
    /**
     * The speed of the animation.
     */
    export let speed: number = 1
    /**
     * The direction of the animation.
     * @type {1 | -1}
     */
    export let direction: AnimationDirection = 1

    let player: HTMLElement
    let animation: AnimationItem | undefined

    $: if (animation) {
        animation.setSpeed(speed)
        animation.setDirection(direction)
    }

    $: if (playOnHover && animation) {
        if (isHovered) {
            animation?.play()
        } else {
            animation?.pause()
        }
    }

    onMount(() => {
        animation = Lottie.loadAnimation({
            renderer,
            container: player,
            loop,
            autoplay: $isMobile || (!playOnHover && autoplay),
            path: src,
        })
    })
</script>

<dotlottie-player
    bind:this={player}
    class:pointer-events-none={pointerEventsNone}
    style:--background-color={backgroundColor}
    {src}
    autoplay={isMobile || (!playOnHover && autoplay)}
    {loop}
    role="img"
/>

<style lang="postcss">
    dotlottie-player {
        @apply block;
        @apply w-full h-full;
        background-color: var(--background-color);
    }
</style>
