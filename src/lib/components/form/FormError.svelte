<script lang="ts">
	export let message: string;
	export let type = 'input';
</script>

<div class="error {type === 'general' ? 'general' : ''}">
	<p class="message">{message}</p>
</div>

<style lang="scss">
	.error {
		background-color: #f44747;
		padding: 10px 15px;
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	}

	.general {
		width: 100%;
		text-align: center;
	}

	.message {
		color: #000;
		font-weight: 600;
		margin: 0;
	}
</style>
