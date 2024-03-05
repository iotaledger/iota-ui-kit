<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="submission">
        <circle id="Ellipse 2184" cx="24" cy="24" r="16" stroke={fill} stroke-width="2" />
        <path
            id="Vector 113"
            d="M24 30.5V18M24 18L18.5 23.5M24 18L29.5 23.5"
            stroke={fill}
            stroke-width="2"
        />
    </g>
</svg>
