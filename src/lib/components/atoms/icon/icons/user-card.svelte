<script lang="ts">
    export let width: number = 48
    export let height: number = 48
    export let currentColor: boolean = false
    export let fill: string = currentColor ? 'currentColor' : '#2559F5'
</script>

<svg {width} {height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="interview">
        <rect
            id="Rectangle 5956"
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
            id="Ellipse 2187"
            d="M28 31C29.1046 31 30.0312 30.0806 29.6697 29.0368C29.6309 28.9248 29.5888 28.8137 29.5433 28.7039C29.2417 27.9759 28.7998 27.3145 28.2426 26.7574C27.6855 26.2002 27.0241 25.7583 26.2961 25.4567C25.5681 25.1552 24.7879 25 24 25C23.2121 25 22.4319 25.1552 21.7039 25.4567C20.9759 25.7583 20.3145 26.2002 19.7574 26.7574C19.2002 27.3145 18.7583 27.9759 18.4567 28.7039C18.4112 28.8137 18.3691 28.9248 18.3303 29.0368C17.9688 30.0806 18.8954 31 20 31L24 31H28Z"
            {fill}
        />
        <circle id="Ellipse 2188" cx="24" cy="20" r="3" {fill} />
    </g>
</svg>
