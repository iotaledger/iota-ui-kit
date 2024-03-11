<script lang="ts">
    import { Icon } from '$atoms'
    import { FONT_FAMILY_CLASS } from '$lib/constants'
    import { ButtonSize, ButtonType } from '.'
    import type { IconEnum } from '../icon/icon.enums'
    import {
        BUTTON_WITH_ICON,
        TEXT_SIZES,
        VARIANT_COLORS,
        BUTTON_LIGHTMODE_ICON_FILL,
    } from './button.classes'

    /**
     * The type of button
     * @type {ButtonType}
     */
    export let type: ButtonType

    /**
     * The size of the button
     * @type {ButtonSize}
     */
    export let size: ButtonSize = ButtonSize.Medium

    /**
     * Content of the button
     * @type {string}
     */
    export let label: string = ''
    export let darkmode: boolean = false
    export let disabled: boolean = false

    /**
     * Use the button as a link
     */
    export let href: string = ''

    /**
     * Open the link in a new tab
     */
    export let isExternal: boolean = false

    /**
     * Selected Icon
     * @type {IconEnum}
     */
    export let icon: IconEnum | null = null

    $: textClasses = TEXT_SIZES[size]
    $: colorClasses = !darkmode
        ? VARIANT_COLORS[type].light ?? VARIANT_COLORS[type].dark
        : VARIANT_COLORS[type].dark
    $: iconClasses = icon && !label ? BUTTON_WITH_ICON[size] : 'px-6'
    $: iconFill = darkmode
        ? BUTTON_LIGHTMODE_ICON_FILL[type].dark
        : BUTTON_LIGHTMODE_ICON_FILL[type].light
</script>

<svelte:element
    this={href ? 'a' : 'button'}
    role={href ? 'link' : 'button'}
    class="{textClasses} {colorClasses} {iconClasses} {FONT_FAMILY_CLASS.primary}"
    {disabled}
    href={href || null}
    target={href && isExternal ? '_blank' : null}
    on:click
>
    {#if label}
        {label}
    {/if}
    {#if icon}
        <span class={iconFill}>
            <Icon {icon} currentColor />
        </span>
    {/if}
</svelte:element>

<style lang="postcss">
    button,
    a {
        @apply font-medium rounded-sm inline-flex justify-center items-center gap-4;
        @apply py-2;
        @apply disabled:opacity-50 disabled:cursor-not-allowed;
    }
</style>
