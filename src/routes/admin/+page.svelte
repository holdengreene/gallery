<script lang="ts">
	import { formatDate } from '$lib/ts/formatDate';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Galleries</h1>

<table>
	<thead>
		<tr>
			<th>Gallery Name</th>
			<th>Category</th>
			<th># of Images</th>
			<th>Date Created</th>
		</tr>
	</thead>
	<tbody>
		{#if data.galleries}
			{#each data.galleries as gallery}
				<tr>
					<td>{gallery.name}</td>
					<td>{gallery.category}</td>
					<td>{gallery._count.image}</td>
					<td>{formatDate(gallery.created_at)}</td>
					<td><a href={`/admin/edit/${gallery.id}`}>Edit</a></td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>

<style lang="scss">
	table,
	th,
	td,
	tr {
		border: 1px solid var(--dark-border-color);
		border-collapse: collapse;
		padding: 10px;
	}
</style>
