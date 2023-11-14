<script lang="ts">
  export let width: number = 24
  export let height: number = 24
  export let currentColor: boolean = false
  export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 24 24" fill="none">
  <path d="M7 6.99998L16.7634 6.99998M16.7634 6.99998L16.7634 16.6039M16.7634 6.99998L7.15951 16.6039" stroke={fill} stroke-width="1.5"/>
</svg>
