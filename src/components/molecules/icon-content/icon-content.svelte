<script lang="ts">
    import { IconEnum, Icon } from '$components'
    import { ICON_FILL, TEXT_COLORS } from './icon-content.classes'
    import { Mode } from '$lib/enums'

    /**
     * The icon to display
     * @type {IconEnum}
     */
    export let icon: IconEnum = IconEnum.Bullet
    /**
     * Title to display
     */
    export let title: string = ''
    /**
     * Description to display
     */
    export let description: string = ''
    /**
     * Content direction
     */
    // export let direction: 'row' | 'column' = 'row'
    /**
     * Whether to use dark mode
     */
    export let darkmode: boolean = false

    $: mode = darkmode ? Mode.Dark : Mode.Light
</script>

<div class="flex flex-row space-x-2 items-center">
    <span class={ICON_FILL[mode]}>
        <Icon {icon} width={32} height={32} currentColor />
    </span>
    <p class={TEXT_COLORS[mode]}>{title}</p>
    <p>{description}</p>
</div>
