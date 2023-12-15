<script lang="ts">
    import { Mode } from '$lib/enums'
    import { MENU_ITEM_COLORS } from './menu-item.classes'

    /**
     * Title of the menu item
     * @type {string}
     */
    export let title: string

    /**
     * Link to the menu item
     * @type {string}
     */
    export let href: string

    /**
     * Link is external
     * @type {string}
     */
    export let isExternal: boolean = false

    /**
     * Darkmode
     * @type {string}
     */
    export let darkmode: boolean = false

    $: colorClasses = darkmode ? MENU_ITEM_COLORS[Mode.Dark] : MENU_ITEM_COLORS[Mode.Light]
</script>

<a {href} target={isExternal ? '_blank' : ''} class="{colorClasses} px-4 py-8 text-sm font-medium">
    {title}
</a>
