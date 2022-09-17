<script lang="ts">
	import { enhance } from '$app/forms';
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import InputWrap from '$lib/components/form/InputWrap.svelte';
	import PasswordInput from '$lib/components/form/PasswordInput.svelte';
	import SubmitButton from '$lib/components/form/SubmitButton.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="center-content full-page-height">
	<FormCard>
		<form method="post" use:enhance>
			<div class="form-flex">
				<h1>Log In</h1>
				{#if form?.login}
					<FormError message={form.login} type="general" />
				{/if}

				<InputWrap>
					<TextInput label="Username" id="username" autocomplete="username" />
					{#if form?.username}
						<FormError message={form.username} />
					{/if}
				</InputWrap>

				<InputWrap>
					<PasswordInput />
					{#if form?.password}
						<FormError message={form.password} />
					{/if}
				</InputWrap>

				<SubmitButton>Log In</SubmitButton>
			</div>
		</form>
	</FormCard>
</main>
