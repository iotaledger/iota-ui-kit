import type { ComponentProps } from 'svelte'
import type { MediaType, ObjectFit } from './media-manager.enums'
import type { Animation } from '../../atoms'

export type VideoMedia = {
    type: MediaType.Video
    src: string
} & VideoProps

export type ImageMedia = {
    type: MediaType.Image
    src: string
    alt: string
} & ImageProps

export type AnimationMedia = {
    type: MediaType.Animation
} & AnimationProps

export type VideoProps = {
    controls?: boolean
    objectFit?: ObjectFit
    autoplay?: boolean
    loop?: boolean
    poster?: string
}

export type ImageProps = {
    objectFit?: ObjectFit
}

export type AnimationProps = ComponentProps<Animation>

export type Media = ImageMedia | VideoMedia | AnimationMedia
