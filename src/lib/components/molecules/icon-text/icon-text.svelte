<script lang="ts">
    import { IconEnum, Icon } from '$components'
    import { ICON_FILL, TEXT_COLORS } from './icon-text.classes'
    import { Mode } from '$lib/enums'
    import { FONT_FAMILY_CLASS } from '$lib/constants'

    /**
     * The icon to display
     * @type {IconEnum}
     */
    export let icon: IconEnum = IconEnum.ArrowTopRight
    /**
     * Label to display
     */
    export let label: string = ''
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
    <p class="{TEXT_COLORS[mode]} {FONT_FAMILY_CLASS.primary}">{label}</p>
</div>

<style lang="postcss">
    div {
        p {
            @apply text-lg font-medium;
        }
    }
</style>
