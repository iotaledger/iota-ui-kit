<script lang="ts">
    import Lottie, { type AnimationItem } from 'lottie-web'
    import { onMount } from 'svelte'
    import { RendererType } from './animation.enums'
    import { isMobileDevice } from '$lib/utils'

    export let src: string =
        'https://lottie.host/05761115-2753-4236-8e02-049e9b61969f/X6gyzVzo8S.json'
    export let autoplay: boolean = true
    /**
     * The renderer of the animation.
     * @type {RendererType}
     */
    export let renderer: RendererType = RendererType.Svg
    export let loop: boolean = true
    export let pointerEventsNone: boolean = false
    export let backgroundColor: string = 'transparent'
    export let playOnHover: boolean = false
    export let isHovered: boolean = false

    let player: HTMLElement
    let animation: AnimationItem | undefined

    $: if (playOnHover) {
        isHovered ? void animation?.play() : animation?.pause()
    }

    onMount(() => {
        animation = Lottie.loadAnimation({
            renderer,
            container: player,
            loop,
            autoplay: isMobileDevice() || (!playOnHover && autoplay),
            path: src,
        })
    })

    function onMouseLeave(): void {
        if (playOnHover) {
            animation?.pause()
        }
    }
</script>

<dotlottie-player
    bind:this={player}
    class:pointer-events-none={pointerEventsNone}
    style:--background-color={backgroundColor}
    {src}
    autoplay={isMobileDevice() || (!playOnHover && autoplay)}
    {loop}
    role="img"
    on:mouseleave={onMouseLeave}
/>

<style lang="postcss">
    dotlottie-player {
        @apply block;
        @apply w-full h-full;
        background-color: var(--background-color);
    }
</style>
