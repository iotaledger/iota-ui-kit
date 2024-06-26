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

    function toggleMobileMenu(): void {
        isMobileMenuOpen = !isMobileMenuOpen
    }
</script>

{#if isMobileMenuOpen}
    <button
        class="fixed z-[-1] top-0 left-0 outline-none border-none p-0 w-full h-screen cursor-auto"
        on:click={toggleMobileMenu}
    />
{/if}

<nav
    class="container w-full"
    class:relative={isMobileMenuOpen}
    class:overflow-y-hidden={!isMobileMenuOpen}
>
    <div class="flex flex-row items-center justify-between px-6">
        <a href="/">
            {#if $$slots.logo}
                <slot name="logo" />
            {:else}
                <Logo {darkmode} />
            {/if}
        </a>
        <desktop-menu-items class="hidden md:flex flex-row items-center space-x-4">
            {#each menuItems as menuItem, index}
                <MenuItem {...menuItem} {darkmode} isActive={activeIndex === index} />
            {/each}
        </desktop-menu-items>
        <button
            on:click={toggleMobileMenu}
            class="flex md:hidden {darkmode ? 'text-white' : 'text-iota-gray-900'}"
        >
            <Icon icon={IconEnum.Menu} width={32} height={32} currentColor />
        </button>
    </div>

    <aside
        class="md:hidden w-full relative transition-[max-height] duration-200 ease-in-out {isMobileMenuOpen
            ? 'max-h-screen'
            : 'max-h-0'}"
    >
        <menu-items class="flex flex-col items-start justify-start space-y-8 py-[60px] px-6">
            {#each menuItems as menuItem, index}
                <MenuItem
                    {...menuItem}
                    {darkmode}
                    isActive={activeIndex === index}
                    mobile
                    on:click={toggleMobileMenu}
                />
            {/each}
        </menu-items>
    </aside>
</nav>
