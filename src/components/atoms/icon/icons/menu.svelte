<script lang="ts">
    export let width: number = 32
    export let height: number = 32
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 32 32" fill="none">
    <rect x="6" y="11" width="62.5%" height="2" rx="1" {fill} />
    <rect x="14" y="19" width="37.5%" height="2" rx="1" {fill} />
</svg>
