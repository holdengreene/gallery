<script lang="ts">
	export let message: string;
	export let type = 'input';
</script>

<div class="error {type === 'general' ? 'general' : ''}">
	<p class="message">{message}</p>
</div>

<style lang="scss">
	.error {
		background-color: var(--error-background-color);
		padding: 10px 15px;
		border-radius: 3px;
		box-shadow: var(--subtle-box-shadow);
	}

	.general {
		width: 100%;
		text-align: center;
	}

	.message {
		color: var(--primary-text-color);
		font-weight: 600;
		margin: 0;
	}
</style>
