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
    /**
     * The width of the animation.
     * For example percentages or pixels.
     */
    export let width: string = '100%'
    /**
     * The height of the animation.
     * For example percentages or pixels.
     */
    export let height: string = '100%'

    let player: HTMLElement

    onMount(() => {
        Lottie.loadAnimation({
            renderer,
            container: player,
            loop,
            autoplay,
            path: src,
        })
    })
</script>

<dotlottie-player
    bind:this={player}
    {src}
    {autoplay}
    {loop}
    style:--width={width}
    style:--height={height}
/>

<style lang="postcss">
    dotlottie-player {
        @apply block;
        width: var(--width);
        height: var(--height);
    }
</style>
