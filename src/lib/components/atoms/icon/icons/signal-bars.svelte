<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="9" width="4" height="30" rx="2" {fill} />
    <rect x="22" y="23" width="4" height="16" rx="2" {fill} />
    <rect x="29" y="27" width="4" height="12" rx="2" {fill} />
    <rect x="15" y="15" width="4" height="24" rx="2" {fill} />
    <rect x="36" y="31" width="4" height="8" rx="2" {fill} />
</svg>
