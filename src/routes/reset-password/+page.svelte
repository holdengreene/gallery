<script lang="ts">
	import type { Errors } from './$types';

	export let errors: Errors;
</script>

<form method="post">
	<label for="password">New Password</label>
	<input type="password" id="password" name="password" autocomplete="new-password" required />
	{#if errors?.password}
		<p>{errors.password}</p>
	{/if}

	<button type="submit">Reset Password</button>
</form>
