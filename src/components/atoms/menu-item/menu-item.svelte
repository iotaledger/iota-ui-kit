<script lang="ts">
    import { Mode } from '$lib/enums'
    import type { IMenuItem } from '.'
    import { MENU_ITEM_COLORS } from './menu-item.classes'

    /**
     * Menu item
     * @type {IMenuItem}
     */
    export let menuItem: IMenuItem

    $: colorClasses = menuItem.darkmode ? MENU_ITEM_COLORS[Mode.Dark] : MENU_ITEM_COLORS[Mode.Light]
</script>

<a
    href={menuItem.href}
    target={menuItem.isExternal ? '_blank' : ''}
    class="{colorClasses} px-4 py-8 text-sm font-medium"
>
    {menuItem.title}
</a>
