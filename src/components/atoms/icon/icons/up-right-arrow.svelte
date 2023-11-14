<script lang="ts">
  export let width: number = 24
  export let height: number = 24
  export let currentColor: boolean = false
  export let fill: string = currentColor ? 'currentColor' : 'white'
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 32 32" fill="none">
<path d="M9.1845 23.2902L23.6481 9.3326M8 9H25M24 25V8" stroke={fill} stroke-width="2"/>
</svg>
