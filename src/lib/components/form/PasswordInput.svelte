<script lang="ts">
	export let id = 'password';
	export let label = 'Password';
	export let name = id;
	export let autocomplete = 'current-password';

	let type = 'password';

	function toggleInputType() {
		if (type === 'password') {
			return (type = 'text');
		}

		return (type = 'password');
	}
</script>

<label for={id}>{label}</label>

<div class="password-wrap">
	<input {type} {id} {name} {autocomplete} class="form-input" />
	<button class="password-toggle" type="button" on:click={toggleInputType}>
		{#if type === 'password'}
			<img src="/eye.svg" alt="show password" aria-hidden="true" width="20" height="20" />
		{:else}
			<img src="/eye-off.svg" alt="hide password" aria-hidden="true" width="20" height="20" />
		{/if}

		<span class="sr-text">{type === 'password' ? 'Show Password' : 'Hide Password'}</span>
	</button>
</div>

<style lang="scss">
	.password-wrap {
		display: flex;
	}

	.form-input {
		flex: 1;
		padding: 5px;
		border: 1px solid #5d5d5d;
		border-right: none;
		border-radius: 3px 0 0 3px;

		&:focus {
			outline: 2px solid #a22ca2;
		}
	}

	.password-toggle {
		border: 1px solid #5d5d5d;
		border-radius: 0 3px 3px 0;
		cursor: pointer;
	}

	.sr-text {
		clip: rect(0 0 0 0);
		clip-path: inset(100%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
