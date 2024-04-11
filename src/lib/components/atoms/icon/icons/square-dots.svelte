<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="12" r="5" {fill} />
    <circle cx="24" cy="36" r="5" {fill} />
    <circle cx="36" cy="24" r="5" transform="rotate(90 36 24)" {fill} />
    <circle cx="12" cy="24" r="5" transform="rotate(90 12 24)" {fill} />
    <circle cx="37" cy="12" r="3" {fill} />
    <circle cx="37" cy="36" r="3" {fill} />
    <circle cx="12" cy="12" r="3" {fill} />
    <circle cx="12" cy="36" r="3" {fill} />
</svg>
