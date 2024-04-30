<script lang="ts">
    import { Icon, IconEnum } from '$atoms'
    import { FONT_FAMILY_CLASS } from '$lib/constants'
    import { Mode } from '$lib/enums'
    import { BORDER_COLOR, ICON_FILL, TEXT_COLORS } from '.'
    /**
     * Label
     * @type {string}
     */
    export let label: string
    /**
     * Darkmode
     * @type {boolean}
     */
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
    class="anchor-link-wrapper {BORDER_COLOR[mode]}"
    class:darkmode
    {href}
    target={isExternal ? '_blank' : null}
    rel={isExternal ? 'noopener noreferrer' : null}
>
    <span class="whitespace-pre-line {TEXT_COLORS[mode]} {FONT_FAMILY_CLASS.primary}">
        {label}
    </span>
    <icon-wrapper>
        <div class={ICON_FILL[mode]}>
            <Icon {icon} currentColor />
        </div>
    </icon-wrapper>
</a>

<style lang="postcss">
    .anchor-link-wrapper {
        @apply py-[14px] md:py-7 px-6 md:pl-6 md:pr-0 w-full;
        @apply transition-all duration-200;
        @apply cursor-pointer;
        @apply rounded-2xl;
        @apply border border-opacity-0.16;
        backdrop-filter: blur(8px);

        &:hover {
            background-color: rgba(21, 115, 255, 0.08);
        }
        &:active {
            background-color: rgba(21, 115, 255, 0.16);
        }

        &.darkmode {
            @apply bg-black bg-opacity-[0.01];
            &:hover {
                @apply bg-white bg-opacity-0.08;
            }
            &:active {
                @apply bg-white bg-opacity-0.16;
            }
        }

        @apply flex items-center w-full space-x-6;

        span {
            @apply text-xl font-medium leading-7;
        }

        icon-wrapper {
            @apply rotate-45;
        }
    }
</style>
