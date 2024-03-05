<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10L18 18M18 18L10 18M18 18L10.8571 10.5926" stroke={fill} stroke-width="1.5" />
</svg>
