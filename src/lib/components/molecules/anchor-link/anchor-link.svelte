<script lang="ts">
    import { Icon, IconEnum } from '$atoms'
    import { FONT_FAMILY_CLASS } from '$lib/constants'
    import { Mode } from '$lib/enums'
    import { BACKGROUND_COLORS, BORDER_COLORS, ICON_FILL, TEXT_COLORS } from '.'
    /**
     * Label
     * @type {string}
     */
    export let label: string
    export let darkmode: boolean = false
    /**
     * Link to
     * @type {string}
     */
    export let href: string
    /**
     * Selected Icon
     * @type {IconEnum}
     */
    export let icon: IconEnum = IconEnum.ArrowTopRight

    /**
     * Whether to open the link in a new tab
     */
    export let isExternal: boolean = false

    $: mode = darkmode ? Mode.Dark : Mode.Light
</script>

<a
    class="anchor-link-wrapper {BACKGROUND_COLORS[mode]}"
    {href}
    target={isExternal ? '_blank' : null}
    rel={isExternal ? 'noopener noreferrer' : null}
>
    <anchor-link-content class={BORDER_COLORS[mode]}>
        <span class="{TEXT_COLORS[mode]} {FONT_FAMILY_CLASS.primary}">
            {label}
        </span>
        <icon-wrapper>
            <div class={ICON_FILL[mode]}>
                <Icon {icon} currentColor />
            </div>
        </icon-wrapper>
    </anchor-link-content>
</a>

<style lang="postcss">
    .anchor-link-wrapper {
        @apply flex py-3 sm:py-4 pr-3 sm:pr-0 pl-6 w-full;
        @apply transition-all duration-200;
        @apply cursor-pointer;
        @apply rounded-xl sm:rounded-none;
        @apply border border-black border-opacity-0.16 sm:border-none;

        anchor-link-content {
            @apply sm:py-3 sm:pr-4 flex items-center justify-between w-full space-x-2;
            @apply sm:border-r border-opacity-0.16;

            span {
                @apply text-lg font-medium leading-7;
            }

            icon-wrapper {
                @apply rotate-90;
            }
        }
    }
</style>
