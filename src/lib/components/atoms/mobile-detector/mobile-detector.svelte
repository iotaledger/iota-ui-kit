<script lang="ts">
    export let isMobile: boolean = false

    let innerWidth: number = 0

    $: isMobile = innerWidth < 768
</script>

<svelte:window bind:innerWidth />
