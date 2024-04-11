<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
        x="8"
        y="8"
        width="32"
        height="32"
        stroke={fill}
        stroke-width="2"
        stroke-dasharray="6 6"
    />
    <rect
        x="14"
        y="14"
        width="20"
        height="20"
        stroke={fill}
        stroke-width="2"
        stroke-dasharray="6 6"
    />
    <rect x="20" y="20" width="8" height="8" {fill} />
</svg>
