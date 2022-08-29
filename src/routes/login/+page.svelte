<script lang="ts">
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import InputWrap from '$lib/components/form/InputWrap.svelte';
	import PasswordInput from '$lib/components/form/PasswordInput.svelte';
	import SubmitButton from '$lib/components/form/SubmitButton.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';

	import type { Errors } from './$types';

	export let errors: Errors;
</script>

<main class="center-content full-page-height">
	<FormCard>
		<form method="post">
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

				<SubmitButton text="Log In" />
			</div>
		</form>
	</FormCard>
</main>
