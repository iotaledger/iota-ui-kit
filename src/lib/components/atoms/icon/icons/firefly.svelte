<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 48 48" fill="none">
    <ellipse
        cx="5.25"
        cy="5.25"
        rx="5.25"
        ry="5.25"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 32.25 8.25)"
        {fill}
    />
    <path
        d="M12.218 23.2682C14.6125 20.6948 18.1643 19.7223 21.4478 20.7164L31.7112 23.824L19.8439 36.5034C18.092 38.3753 15.5393 39.145 13.116 38.5552C7.7376 37.2461 5.70548 30.2671 9.61365 26.067L12.218 23.2682ZM31.8741 23.6499L31.8738 23.6502L31.8741 23.6499Z"
        stroke={fill}
        stroke-width="2"
    />
    <path
        d="M21.6065 27.6189C17.9029 28.7589 13.87 27.7638 11.129 25.0334L8.43389 22.3487C3.88038 17.8129 6.02975 10.0635 12.2751 8.49944C15.0951 7.79321 18.0805 8.61009 20.1425 10.6522L32.5908 22.9801C33.0299 23.415 32.846 24.1591 32.2544 24.3412L21.6065 27.6189Z"
        {fill}
    />
</svg>
