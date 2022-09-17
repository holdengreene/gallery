<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<a href="/admin" class:active={$page.url.pathname === '/admin'}>Dashboard</a>
		<a href="/admin/create" class:active={$page.url.pathname === '/admin/create'}>Create Gallery</a>
		<a href="/sign-out">Sign Out</a>
	</nav>
</header>

<slot />

<style lang="scss">
	.active {
		color: red;
		text-decoration: none;
	}
</style>
