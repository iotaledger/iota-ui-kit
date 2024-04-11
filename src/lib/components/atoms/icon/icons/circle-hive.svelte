<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="25" r="4" {fill} />
    <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 21)" {fill} />
    <circle cx="34" cy="16" r="3" {fill} />
    <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 17 13)" {fill} />
    <circle cx="24" cy="16" r="3" {fill} />
    <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 27 13)" {fill} />
    <circle cx="3" cy="3" r="3" transform="matrix(1 0 0 -1 31 37)" {fill} />
    <circle cx="14" cy="34" r="3" transform="rotate(180 14 34)" {fill} />
    <circle cx="3" cy="3" r="3" transform="matrix(1 0 0 -1 21 37)" {fill} />
    <circle cx="24" cy="34" r="3" transform="rotate(180 24 34)" {fill} />
    <circle cx="30" cy="25" r="4" {fill} />
    <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 22 21)" {fill} />
    <circle cx="29" cy="10" r="2" {fill} />
    <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 21 8)" {fill} />
    <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 27 42)" {fill} />
    <circle cx="19" cy="40" r="2" transform="rotate(180 19 40)" {fill} />
</svg>
