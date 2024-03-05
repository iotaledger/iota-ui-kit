<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M29 11L35 11C36.1046 11 37 11.8954 37 13L37 35C37 36.1046 36.1046 37 35 37L13 37C11.8954 37 11 36.1046 11 35L11 30"
        stroke={fill}
        stroke-width="2"
    />
    <circle cx="19" cy="19" r="8" stroke={fill} stroke-width="2" />
    <path d="M25 24.5L31.5 31" stroke={fill} stroke-width="2" />
</svg>
