<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M19.5771 9.18127C22.2956 7.60624 25.7044 7.60624 28.4229 9.18127L34.8891 12.9276C37.4412 14.4062 39 17.052 39 19.9049V28.0951C39 30.948 37.4412 33.5938 34.8891 35.0724L28.4229 38.8187C25.7044 40.3938 22.2956 40.3938 19.5771 38.8187L13.111 35.0724C10.5588 33.5938 9 30.948 9 28.0951V19.9049C9 17.052 10.5588 14.4062 13.111 12.9276L19.5771 9.18127Z"
        stroke={fill}
        stroke-width="1.5"
    />
    <path d="M24 8V23.4521M24 23.4521L38 32M24 23.4521L10 32" stroke={fill} stroke-width="1.5" />
    <path
        d="M13 32C13 33.6569 11.6569 35 10 35C8.34315 35 7 33.6569 7 32C7 30.3431 8.34315 29 10 29C11.6569 29 13 30.3431 13 32Z"
        {fill}
    />
    <path
        d="M27 8C27 9.65685 25.6569 11 24 11C22.3431 11 21 9.65685 21 8C21 6.34315 22.3431 5 24 5C25.6569 5 27 6.34315 27 8Z"
        {fill}
    />
    <path
        d="M41 32C41 33.6569 39.6569 35 38 35C36.3431 35 35 33.6569 35 32C35 30.3431 36.3431 29 38 29C39.6569 29 41 30.3431 41 32Z"
        {fill}
    />
</svg>
