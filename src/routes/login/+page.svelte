<script lang="ts">
	import type { Errors } from './$types';

	export let errors: Errors;
</script>

<form method="post">
	{#if errors?.login}
		<div class="general-error">
			<p>{errors.login}</p>
		</div>
	{/if}

	<label for="username">Username</label>
	<input type="text" id="username" name="username" autocomplete="username" />
	{#if errors?.username}
		<p>{errors.username}</p>
	{/if}

	<label for="password">Password</label>
	<input type="password" id="password" name="password" autocomplete="current-password" />
	{#if errors?.password}
		<p>{errors.password}</p>
	{/if}

	<button type="submit">Log In</button>
</form>
