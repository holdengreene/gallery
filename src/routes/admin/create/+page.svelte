<script lang="ts">
	import { enhance } from '$app/forms';
	import FormCard from '$lib/components/form/FormCard.svelte';
	import FormError from '$lib/components/form/FormError.svelte';
	import FormFlex from '$lib/components/form/FormFlex.svelte';
	import InputWrap from '$lib/components/form/InputWrap.svelte';
	import SubmitButton from '$lib/components/form/SubmitButton.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="center-content full-page-height">
	<FormCard>
		<form method="post" use:enhance>
			<FormFlex>
				<h1>Create Gallery</h1>
				<InputWrap>
					<TextInput label="Gallery Name" id="name" required={true} />

					{#if form?.galleryName}
						<FormError>{form.galleryName}</FormError>
					{/if}
				</InputWrap>

				<InputWrap>
					<TextInput label="Category" id="category" required={true} />

					{#if form?.category}
						<FormError>{form.category}</FormError>
					{/if}
				</InputWrap>

				<InputWrap>
					<TextInput label="Cover Photo" id="cover-photo" required={true} />

					{#if form?.coverPhoto}
						<FormError>{form.coverPhoto}</FormError>
					{/if}
				</InputWrap>

				<SubmitButton>Create Gallery</SubmitButton>
			</FormFlex>
		</form>
	</FormCard>
</main>
