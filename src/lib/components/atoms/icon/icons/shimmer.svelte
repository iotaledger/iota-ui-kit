<script lang="ts">
    export let width: number = 36
    export let height: number = 36
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 36 36" fill="none">
    <path
        d="M28.4829 7.04521C23.6821 1.75272 15.7921 1.63863 10.8603 6.79051C5.92849 11.9424 5.82227 20.4092 10.6231 25.7017L13.7792 22.4049C10.6831 18.971 10.7577 13.4937 13.9505 10.1584C17.1433 6.82318 22.2475 6.89062 25.3629 10.3044L28.4829 7.04521Z"
        {fill}
    />
    <path
        d="M7.51708 28.9549C12.3179 34.2473 20.2077 34.3613 25.1395 29.2094C30.0713 24.0576 30.1776 15.5908 25.3768 10.2983L22.221 13.595C25.3171 17.0289 25.2425 22.5062 22.0497 25.8414C18.8569 29.1767 13.7527 29.1092 10.6373 25.6955L7.51708 28.9549Z"
        {fill}
    />
</svg>
