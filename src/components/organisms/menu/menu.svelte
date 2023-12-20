<script lang="ts">
    import { IconEnum, MenuItem, Icon, Logo, type IMenuItem } from '$components'
    import { CUSTOM_COLORS } from '$lib/constants'

    /**
     * Darkmode
     * @type {string}
     */
    export let darkmode: boolean = false

    /**
     * Menu items
     * @type {IMenuItem[]}
     */
    export let menuItems: IMenuItem[]
</script>

<nav class="flex flex-row items-center justify-between w-full px-6 lg:px-0">
    <Logo {darkmode} />
    <desktop-menu-items class="hidden lg:flex flex-row items-center space-x-4">
        {#each menuItems as menuItem}
            {@const item = { ...menuItem, darkmode: darkmode }}
            <MenuItem menuItem={item} />
        {/each}
    </desktop-menu-items>
    <mobile-menu class="flex lg:hidden">
        <Icon
            icon={IconEnum.Menu}
            width={32}
            height={32}
            fill={darkmode ? 'white' : CUSTOM_COLORS['iota-gray'][900]}
        />
    </mobile-menu>
</nav>
