<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="duplication">
        <path
            id="Rectangle 5959"
            d="M21 17L21 16C21 13.7909 19.2091 12 17 12L11 12C8.79086 12 7 13.7909 7 16L7 32C7 34.2091 8.79086 36 11 36L17 36C19.2091 36 21 34.2091 21 32V32"
            stroke={fill}
            stroke-width="2"
        />
        <path
            id="Rectangle 5961"
            d="M28 17L28 16C28 13.7909 29.7909 12 32 12L38 12C40.2091 12 42 13.7909 42 16L42 32C42 34.2091 40.2091 36 38 36L32 36C29.7909 36 28 34.2091 28 32V32"
            stroke={fill}
            stroke-width="2"
        />
        <line
            id="Line 1"
            x1="19.7071"
            y1="19.2929"
            x2="29.7071"
            y2="29.2929"
            stroke={fill}
            stroke-width="2"
        />
        <line
            id="Line 2"
            y1="-1"
            x2="14.1421"
            y2="-1"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 30 20)"
            stroke={fill}
            stroke-width="2"
        />
    </g>
</svg>
