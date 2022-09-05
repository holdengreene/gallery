<script lang="ts">
	import GalleryCard from '$lib/components/GalleryCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to the Gallery</h1>

<div class="gallery-grid">
	{#if data.galleries}
		{#each data.galleries as gallery}
			<GalleryCard src={gallery.cover_photo} name={gallery.name} galleryId={gallery.id} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.gallery-grid {
		--gallery-columns: repeat(auto-fill, min(200px, 100%));
		display: grid;
		grid-template-columns: var(--gallery-columns);
		gap: 25px;
	}
</style>
