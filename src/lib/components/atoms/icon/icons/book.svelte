<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
        x="24"
        y="12"
        width="24"
        height="16"
        rx="2"
        transform="rotate(90 24 12)"
        stroke={fill}
        stroke-width="2"
    />
    <rect
        x="41"
        y="12"
        width="24"
        height="16"
        rx="2"
        transform="rotate(90 41 12)"
        stroke={fill}
        stroke-width="2"
    />
    <rect x="20" y="16" width="2" height="8" rx="1" transform="rotate(90 20 16)" {fill} />
    <rect x="18" y="21" width="2" height="6" rx="1" transform="rotate(90 18 21)" {fill} />
    <rect x="37" y="30" width="2" height="8" rx="1" transform="rotate(90 37 30)" {fill} />
</svg>
