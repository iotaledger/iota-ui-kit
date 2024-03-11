<script lang="ts">
    import { IconEnum, MenuItem, Icon, Logo } from '$components'
    import type { ComponentProps } from 'svelte'
    import { CUSTOM_COLORS } from '$lib/constants'

    /**
     * Darkmode
     * @type {string}
     */
    export let darkmode: boolean = false

    /**
     * Menu items
     * @type {ComponentProps<MenuItem>[]}
     */
    export let menuItems: ComponentProps<MenuItem>[]

    /**
     * Active index
     * @type {number}
     */
    export let activeIndex: number | undefined = undefined

    function getActiveIndexSetter(index: number): () => void {
        return () => (activeIndex = index)
    }
</script>

<nav class="flex flex-row items-center justify-between w-full px-6 lg:px-0">
    <Logo {darkmode} />
    <desktop-menu-items class="hidden lg:flex flex-row items-center space-x-4">
        {#each menuItems as menuItem, index}
            {@const handleOnClick = getActiveIndexSetter(index)}
            <MenuItem
                {...menuItem}
                {darkmode}
                isActive={activeIndex === index}
                on:click={handleOnClick}
            />
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
