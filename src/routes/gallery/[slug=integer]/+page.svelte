<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Yo this be {data.galleryName}</h1>

{#each data.images as image}
	<img src={image.thumbnail_image ?? image.image} alt={`Image from ${data.galleryName}`} />
{/each}
