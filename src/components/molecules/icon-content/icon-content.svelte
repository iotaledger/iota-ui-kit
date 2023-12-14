<script lang="ts">
    import { IconEnum, Icon } from '$components'
    import {
        DESCRIPTION_COLORS,
        DIRECTION_CLASSES,
        ICON_FILL,
        TITLE_COLORS,
    } from './icon-content.classes'
    import { Direction, Mode } from '$lib/enums'

    /**
     * The icon to display
     * @type {IconEnum}
     */
    export let icon: IconEnum
    /**
     * Title to display
     */
    export let title: string
    /**
     * Description to display
     */
    export let description: string
    /**
     * Content direction
     */
    export let direction: Direction = Direction.Row
    /**
     * Whether to use dark mode
     */
    export let darkmode: boolean = false

    $: mode = darkmode ? Mode.Dark : Mode.Light
    $: directionClass = DIRECTION_CLASSES[direction]
</script>

<div class="flex items-start justify-center {directionClass}">
    <span class={ICON_FILL[mode]}>
        <Icon {icon} width={48} height={48} currentColor />
    </span>
    <div class="flex flex-col items-start space-y-4 pl-3">
        <p class="text-2xl font-medium leading-32 {TITLE_COLORS[mode]}">{title}</p>
        <p class="leading-28 {DESCRIPTION_COLORS[mode]}">{description}</p>
    </div>
</div>
