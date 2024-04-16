<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 48 48" fill="none">
    <g id="smart_contract">
        <path
            id="Rectangle 5959"
            d="M36 30.5L36 8C36 6.89543 35.1046 6 34 6L14 6C12.8954 6 12 6.89543 12 8L12 36C12 37.1046 12.8954 38 14 38L22 38"
            stroke={fill}
            stroke-width="2"
        />
        <rect
            id="Rectangle 5958"
            x="31"
            y="12"
            width="2"
            height="14"
            rx="1"
            transform="rotate(90 31 12)"
            {fill}
        />
        <rect
            id="Rectangle 5962"
            x="26"
            y="18"
            width="2"
            height="9"
            rx="1"
            transform="rotate(90 26 18)"
            {fill}
        />
        <path
            id="Rectangle 5451"
            d="M43 37C43 40.866 39.866 44 36 44C32.134 44 29 40.866 29 37C29 33.134 32.134 30 36 30C39.866 30 43 33.134 43 37Z"
            {fill}
        />
        <path
            id="Rectangle 5963"
            d="M31 32.7151C29.939 31.6542 28.4856 31 26.8824 31C23.6336 31 21 33.6863 21 37C21 40.3137 23.6336 43 26.8824 43C28.4856 43 29.939 42.3458 31 41.2849"
            stroke={fill}
            stroke-width="2"
        />
    </g>
</svg>
