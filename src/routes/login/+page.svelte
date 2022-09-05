<script lang="ts">
	import { goto } from '$app/navigation';
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import InputWrap from '$lib/components/form/InputWrap.svelte';
	import PasswordInput from '$lib/components/form/PasswordInput.svelte';
	import SubmitButton from '$lib/components/form/SubmitButton.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import { sendForm } from '$lib/ts/sendForm';

	import type { Errors } from './$types';

	export let errors: Errors;

	async function logIn({ target }: Event) {
		const { formErrors } = await sendForm(target as HTMLFormElement, '/login');

		if (formErrors) {
			return (errors = formErrors);
		}

		goto('/admin');
	}
</script>

<main class="center-content full-page-height">
	<FormCard>
		<form method="post" on:submit|preventDefault={logIn}>
			<div class="form-flex">
				<h1>Log In</h1>
				{#if errors?.login}
					<FormError message={errors.login} type="general" />
				{/if}

				<InputWrap>
					<TextInput label="Username" id="username" autocomplete="username" />
					{#if errors?.username}
						<FormError message={errors.username} />
					{/if}
				</InputWrap>

				<InputWrap>
					<PasswordInput />
					{#if errors?.password}
						<FormError message={errors.password} />
					{/if}
				</InputWrap>

				<SubmitButton>Log In</SubmitButton>
			</div>
		</form>
	</FormCard>
</main>
