<script lang="ts">
    import { type IconEnum, Icon } from '$atoms'

    export let fill: string
    export let icon: IconEnum
    export let name: string
    export let width: number = 24
    export let height: number = 24
    export let darkmode: boolean = false
    export let iconOutline: boolean = false

    // Update icon fill when theme changes
    $: if (darkmode) {
        fill = 'white'
    } else {
        fill = 'black'
    }
</script>

<icon-example
    class="flex flex-col items-center space-y-2 border p-2 rounded-xl"
    class:bg-iota-gray-800={darkmode}
    class:bg-iota-gray-50={!darkmode}
    class:text-white={darkmode}
>
    <outline class:active={iconOutline}>
        <Icon {icon} {fill} {width} {height} />
    </outline>
    <p class="text-center">{name}</p>
</icon-example>

<style lang="postcss">
    outline {
        @apply border border-transparent;
    }

    outline.active {
        @apply border-iota-gray-500;
    }
</style>
