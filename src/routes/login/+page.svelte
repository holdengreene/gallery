<script lang="ts">
	import { enhance } from '$app/forms';
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import FormFlex from '$lib/components/form/FormFlex.svelte';
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
			<FormFlex>
				<h1>Log In</h1>
				{#if form?.login}
					<FormError type="general">{form.login}</FormError>
				{/if}

				<InputWrap>
					<TextInput label="Username" id="username" autocomplete="username" required={true} />
					{#if form?.username}
						<FormError>{form.username}</FormError>
					{/if}
				</InputWrap>

				<InputWrap>
					<PasswordInput />
					{#if form?.password}
						<FormError>{form.password}</FormError>
					{/if}
				</InputWrap>

				<SubmitButton>Log In</SubmitButton>
			</FormFlex>
		</form>
	</FormCard>
</main>
