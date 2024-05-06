<script lang="ts">
    import type { AnimationMedia, ImageMedia, Media, VideoMedia } from './media-manager.types'
    import { MediaType } from '..'
    import { IMAGE_DEFAULT_PROPS, VIDEO_DEFAULT_PROPS } from './media-manager.constants'
    import { Animation } from '$atoms'
    import { isMobileDevice } from '$lib/utils'

    export let media: Media
    export let pointerEventsNone: boolean = false
    export let playOnHover: boolean = false
    export let isHovered: boolean = false
    export let disablePlaysInline: boolean = false

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

    $: if (playOnHover && videoElement) {
        if (isHovered) {
            void videoElement.play()
        } else {
            videoElement.pause()
        }
    }
</script>

{#if media.type === MediaType.Image && imageMedia}
    {@const { src, alt, objectFit } = imageMedia}
    <img {src} {alt} class={objectFit} class:pointer-events-none={pointerEventsNone} />
{:else if media.type === MediaType.Video && videoMedia}
    {@const {
        src,
        loop,
        autoplay,
        objectFit,
        poster,
        disablePlaysInline: disablePlaysInlineFallback,
    } = videoMedia}
    <video
        bind:this={videoElement}
        autoplay={isMobileDevice() || (!playOnHover && autoplay)}
        {loop}
        muted
        {poster}
        class={objectFit}
        class:pointer-events-none={pointerEventsNone}
        playsinline={disablePlaysInline ? false : !disablePlaysInlineFallback}
    >
        <source {src} type="video/mp4" />
    </video>
{:else if media.type === MediaType.Animation && animationMedia}
    <Animation {...animationMedia} {pointerEventsNone} {playOnHover} {isHovered} />
{/if}

<style lang="postcss">
    img,
    video {
        @apply w-full h-full;
    }
</style>
