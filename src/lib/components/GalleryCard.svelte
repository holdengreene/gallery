<script lang="ts">
	export let src: string | null;
	export let name: string;
	export let galleryId: number;
</script>

<article class="gallery-card">
	<img src={src ?? '@TODO PLACEHOLDER IMAGE'} alt={name} />
	<h2>{name}</h2>

	<a href={`/gallery/${galleryId}`} sveltekit:prefetch>View Gallery</a>
</article>

<style lang="scss">
	.gallery-card {
		border: 1px solid #d5d5d5;
		text-align: center;
	}
</style>
