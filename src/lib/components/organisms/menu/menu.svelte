<script lang="ts">
    import { IconEnum, MenuItem, Icon, Logo } from '$components'
    import type { ComponentProps } from 'svelte'

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

    /**
     * Is mobile menu open
     */
    export let isMobileMenuOpen: boolean = false

    function getActiveIndexSetter(index: number): () => void {
        return () => (activeIndex = index)
    }

    function toggleMobileMenu(): void {
        isMobileMenuOpen = !isMobileMenuOpen
    }
</script>

{#if isMobileMenuOpen}
    <button
        class="fixed z-[-1] top-full left-0 outline-none border-none p-0 w-full h-screen cursor-auto"
        on:click={toggleMobileMenu}
    />
{/if}

<nav class="container w-full" class:relative={isMobileMenuOpen}>
    <div class="flex flex-row items-center justify-between px-6 py-3 md:py-0">
        <a href="/">
            <Logo {darkmode} />
        </a>
        <desktop-menu-items class="hidden md:flex flex-row items-center space-x-4">
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
        <button
            on:click={toggleMobileMenu}
            class="flex md:hidden {darkmode ? 'text-white' : 'text-iota-gray-900'}"
        >
            <Icon icon={IconEnum.Menu} width={32} height={32} currentColor />
        </button>
    </div>

    <aside class="md:hidden w-full relative" class:hidden={!isMobileMenuOpen}>
        <menu-items class="flex flex-col items-start justify-start space-y-8 py-[60px] px-6">
            {#each menuItems as menuItem, index}
                {@const handleOnClick = getActiveIndexSetter(index)}
                <MenuItem
                    {...menuItem}
                    {darkmode}
                    isActive={activeIndex === index}
                    on:click={handleOnClick}
                    mobile
                />
            {/each}
        </menu-items>
    </aside>
</nav>
