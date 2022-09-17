<script lang="ts">
	import { enhance } from '$app/forms';
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import InputWrap from '$lib/components/form/InputWrap.svelte';
	import PasswordInput from '$lib/components/form/PasswordInput.svelte';
	import SubmitButton from '$lib/components/form/SubmitButton.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="center-content full-page-height">
	<FormCard>
		<form method="post" use:enhance>
			<div class="form-flex">
				<h1>Reset Password</h1>

				<InputWrap>
					<PasswordInput label="New Password" autocomplete="new-password" />
					{#if form?.password}
						<FormError message={form.password} />
					{/if}
				</InputWrap>

				<SubmitButton>Reset Password</SubmitButton>
			</div>
		</form>
	</FormCard>
</main>

<form method="post">
	<label for="password">New Password</label>
	<input type="password" id="password" name="password" autocomplete="new-password" required />
	{#if form?.password}
		<p>{form.password}</p>
	{/if}

	<button type="submit">Reset Password</button>
</form>
