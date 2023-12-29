<script lang="ts">
    import Lottie from 'lottie-web'
    import { onMount } from 'svelte'
    import { RendererType } from './animation.enums'

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
    export let hoverPauseEnabled: boolean = false
    export let isHovered: boolean = false

    let player: HTMLElement
    let animation: any
    onMount(() => {
        animation = Lottie.loadAnimation({
            renderer,
            container: player,
            loop,
            autoplay,
            path: src,
        })
        if (hoverPauseEnabled) {
            animation.pause()
        }
    })

    $: {
        if (isHovered) {
            animation?.play()
        } else {
            animation?.pause()
        }
    }
</script>

<dotlottie-player
    bind:this={player}
    class:pointer-events-none={pointerEventsNone}
    style:--background-color={backgroundColor}
    {src}
    {autoplay}
    {loop}
    {isHovered}
    {hoverPauseEnabled}
/>

<style lang="postcss">
    dotlottie-player {
        @apply block;
        @apply w-full h-full;
        background-color: var(--background-color);
    }
</style>
