<script lang="ts">
    export let width: number = 32
    export let height: number = 32
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg {width} {height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20 15.9999C20 20.3947 16.293 23.9999 11.6667 23.9999C7.04037 23.9999 3.33335 20.3947 3.33335 15.9999C3.33335 11.6051 7.04037 7.99992 11.6667 7.99992C16.293 7.99992 20 11.6051 20 15.9999Z"
        stroke={fill}
        stroke-width="1.33333"
    />
    <path
        d="M28.6666 15.9999C28.6666 20.3947 24.9596 23.9999 20.3333 23.9999C15.707 23.9999 12 20.3947 12 15.9999C12 11.6051 15.707 7.99992 20.3333 7.99992C24.9596 7.99992 28.6666 11.6051 28.6666 15.9999Z"
        stroke={fill}
        stroke-width="1.33333"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3419 23.6997C18.9987 22.1628 20.7863 19.2902 20.7863 16C20.7863 12.7099 18.9987 9.83722 16.3418 8.30029C13.685 9.83722 11.8974 12.7099 11.8974 16C11.8974 19.2902 13.685 22.1628 16.3419 23.6997Z"
        {fill}
    />
</svg>
