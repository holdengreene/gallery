<script lang="ts">
	export let text: string;
</script>

<button class="submit-btn" type="submit">{text}</button>

<style lang="scss">
	.submit-btn {
		background-color: var(--primary-color);
		padding: 5px 15px;
		border: none;
		color: #fff;
		font-size: 24px;
		font-weight: 600;
		border-radius: 3px;
		cursor: pointer;
		transition: background-color 0.25s ease;

		&:hover {
			background-color: var(--primary-color-hover);
		}
	}
</style>
