<script lang="ts">
	export let type = 'text';
	export let id: string;
	export let label: string;
	export let name = id;
	export let autocomplete: string | undefined = undefined;
	export let required = false;
</script>

<label for={id}>{label}</label>
<input {type} {id} {name} {autocomplete} {required} class="form-input" />

<style lang="scss">
	.form-input {
		padding: 5px;
		border: 1px solid var(--light-border-color);
		border-radius: 3px;

		&:focus {
			outline: 2px solid var(--primary-color);
		}
	}
</style>
