<script lang="ts">
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import InputWrap from '$lib/components/form/InputWrap.svelte';
	import PasswordInput from '$lib/components/form/PasswordInput.svelte';
	import SubmitButton from '$lib/components/form/SubmitButton.svelte';

	import type { Errors } from './$types';

	export let errors: Errors;
</script>

<main class="center-content full-page-height">
	<FormCard>
		<form method="post">
			<div class="form-flex">
				<h1>Reset Password</h1>

				<InputWrap>
					<PasswordInput label="New Password" autocomplete="new-password" />
					{#if errors?.password}
						<FormError message={errors.password} />
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
	{#if errors?.password}
		<p>{errors.password}</p>
	{/if}

	<button type="submit">Reset Password</button>
</form>
