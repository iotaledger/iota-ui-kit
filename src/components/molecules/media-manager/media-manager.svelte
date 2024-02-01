<script lang="ts">
    import type { AnimationMedia, ImageMedia, Media, VideoMedia } from './media-manager.types'
    import { MediaType } from '..'
    import { IMAGE_DEFAULT_PROPS, VIDEO_DEFAULT_PROPS } from './media-manager.constants'
    import { Animation } from '$atoms'
    import { isMobileDevice } from '$lib/utils'

    export let media: Media
    export let pointerEventsNone: boolean = false
    export let hoverPauseEnabled: boolean = false

    let imageMedia: ImageMedia
    let videoMedia: VideoMedia | undefined
    let animationMedia: AnimationMedia | undefined
    let videoElement: HTMLVideoElement | null = null

    $: {
        if (media.type === MediaType.Image) {
            imageMedia = { ...IMAGE_DEFAULT_PROPS, ...media }
        } else if (media.type === MediaType.Video) {
            videoMedia = { ...VIDEO_DEFAULT_PROPS, ...media }
        } else if (media.type === MediaType.Animation) {
            animationMedia = media
        }
    }
    $: if (!isMobileDevice()) {
        if (hoverPauseEnabled) {
            videoElement?.play()
        } else if (!hoverPauseEnabled) {
            videoElement?.pause()
        }
    }
</script>

{#if media.type === MediaType.Image && imageMedia}
    {@const { src, alt, objectFit } = imageMedia}
    <img {src} {alt} class={objectFit} class:pointer-events-none={pointerEventsNone} />
{:else if media.type === MediaType.Video && videoMedia}
    {@const { src, loop, autoplay, objectFit } = videoMedia}
    <video
        bind:this={videoElement}
        {autoplay}
        {loop}
        muted
        class={objectFit}
        class:pointer-events-none={pointerEventsNone}
    >
        <source {src} type="video/mp4" />
    </video>
{:else if media.type === MediaType.Animation && animationMedia}
    <Animation
        {...animationMedia}
        {pointerEventsNone}
        hoverPauseEnabled={hoverPauseEnabled && !isMobileDevice()}
        autoplay={!hoverPauseEnabled && isMobileDevice()}
    />
{/if}

<style lang="postcss">
    img,
    video {
        @apply w-full h-full;
    }
</style>
