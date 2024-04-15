<script lang="ts">
    import { Mode } from '$lib/enums'
    import { MENU_ITEM_COLORS } from './menu-item.classes'

    /**
     * Menu item title
     * @type {string}
     */
    export let title: string
    /**
     * Menu item href
     * @type {string}
     */
    export let href: string | null = null
    /**
     * Open in new tab
     */
    export let isExternal: boolean = false
    /**
     * Is item active
     */
    export let isActive: boolean = false
    export let darkmode: boolean = false
    export let mobile: boolean = false

    $: colorClasses = darkmode ? MENU_ITEM_COLORS[Mode.Dark] : MENU_ITEM_COLORS[Mode.Light]
</script>

<a
    {href}
    target={isExternal ? '_blank' : null}
    class="{colorClasses} {mobile ? 'pb-2' : 'px-4 py-8'} text-sm font-medium leading-[15px]"
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
