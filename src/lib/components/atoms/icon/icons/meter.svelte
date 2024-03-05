<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="risk">
        <path
            id="Ellipse 2184"
            d="M37.8564 37C38.907 35.1804 39.5889 33.1716 39.8631 31.0884C40.1374 29.0052 39.9986 26.8885 39.4548 24.8589C38.911 22.8293 37.9728 20.9268 36.6937 19.2598C35.4146 17.5929 33.8196 16.1942 32 15.1436"
            stroke={fill}
            stroke-width="2"
            stroke-linecap="round"
        />
        <path
            id="Ellipse 2189"
            d="M28.1411 13.5452C25.0844 12.7262 21.8535 12.8319 18.857 13.8491C15.8604 14.8663 13.2328 16.7493 11.3063 19.2598C9.37992 21.7704 8.24123 24.7958 8.03426 27.9536C7.82729 31.1113 8.56134 34.2595 10.1436 37"
            stroke={fill}
            stroke-width="2"
            stroke-linecap="round"
        />
        <path
            id="Ellipse 2188"
            d="M26.5719 32.1383C26.1431 33.7387 24.498 34.6884 22.8976 34.2596C21.2972 33.8307 20.3475 32.1857 20.7763 30.5853C21.0451 29.5823 23.8146 24.8769 25.8446 21.5043C26.3861 20.6046 27.7456 21.0472 27.6551 22.0934C27.3248 25.9132 26.8383 31.144 26.5719 32.1383Z"
            {fill}
        />
    </g>
</svg>
