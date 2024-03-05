<script lang="ts">
    import { type IconEnum, Icon } from '$atoms'

    export let fill: string
    export let icon: IconEnum
    export let name: string
</script>

<icon-example class="flex flex-col items-center space-y-2 border p-2 bg-iota-gray-50 rounded-xl">
    <Icon {icon} {fill} />
    <p>{name}</p>
</icon-example>
