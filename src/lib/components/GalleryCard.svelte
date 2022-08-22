<script lang="ts">
	export let src: string;
	export let title: string;
	export let galleryId: number;
</script>

<article class="gallery-card">
	<img {src} alt={title} />
	<h2>{title}</h2>

	<a href={`/gallery/${galleryId}`} sveltekit:prefetch>View Gallery</a>
</article>

<style lang="scss">
	.gallery-card {
		border: 1px solid #d5d5d5;
		text-align: center;
	}
</style>
