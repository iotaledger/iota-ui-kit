<icon-gallery class="grid gap-4 gap-y-6">
    <slot />
</icon-gallery>

<style>
    icon-gallery {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
</style>
