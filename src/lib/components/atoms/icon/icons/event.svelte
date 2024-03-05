<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
        x="40.75"
        y="11.25"
        width="25.5"
        height="33.5"
        rx="2.75"
        transform="rotate(90 40.75 11.25)"
        stroke={fill}
        stroke-width="1.5"
    />
    <path
        d="M38 12C39.1046 12 40 12.8954 40 14L40 18L8 18L8 14C8 12.8954 8.89543 12 10 12L38 12Z"
        {fill}
    />
    <rect x="36" y="28" width="4" height="8" rx="2" transform="rotate(90 36 28)" {fill} />
</svg>
