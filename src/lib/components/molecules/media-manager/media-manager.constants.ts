import { ObjectFit } from '$lib/components/molecules/media-manager/media-manager.enums'
import type { ImageProps, VideoProps } from './media-manager.types'

export const VIDEO_DEFAULT_PROPS: VideoProps = {
    controls: false,
    objectFit: ObjectFit.Cover,
    autoplay: true,
    loop: true,
}

export const IMAGE_DEFAULT_PROPS: ImageProps = {
    objectFit: ObjectFit.Cover,
}
