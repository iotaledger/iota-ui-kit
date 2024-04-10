<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" y="12" width="10" height="10" rx="2" {fill} />
    <rect x="28" y="12" width="10" height="10" rx="2" {fill} />
    <rect x="11" y="26" width="10" height="10" rx="2" {fill} />
    <rect x="28" y="26" width="10" height="10" rx="2" {fill} />
    <rect x="15" y="8" width="2" height="32" rx="1" {fill} />
    <rect x="32" y="8" width="2" height="32" rx="1" {fill} />
</svg>
