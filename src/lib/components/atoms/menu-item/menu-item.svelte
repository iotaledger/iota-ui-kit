<script lang="ts">
    import { Mode } from '$lib/enums'
    import { MENU_ITEM_COLORS } from './menu-item.classes'

    export let title: string
    export let href: string
    /**
     * Open in new tab
     */
    export let isExternal: boolean = false
    /**
     * Is item active
     */
    export let isActive: boolean = false
    export let darkmode: boolean = false

    $: colorClasses = darkmode ? MENU_ITEM_COLORS[Mode.Dark] : MENU_ITEM_COLORS[Mode.Light]
</script>

<a
    {href}
    target={isExternal ? '_blank' : null}
    class="{colorClasses} px-4 py-8 text-sm font-medium leading-[15px]"
    class:active={isActive}
    class:darkmode
    on:click
>
    {title}
</a>

<style lang="postcss">
    a.active {
        @apply border-b border-iota-gray-900;
        &.darkmode {
            @apply border-b border-white;
        }
    }
</style>
