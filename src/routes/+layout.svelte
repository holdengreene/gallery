<div class="full-background">
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss" global>
	@use 'modern-normalize/modern-normalize';
	@use '../lib/css/variables';

	body {
		color: var(--primary-text-color);
	}

	.full-background {
		background-color: var(--primary-background-color);
	}

	.container {
		max-width: 100%;
		padding: 0 50px;
	}

	.center-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.full-page-height {
		min-height: 100vh;
	}

	.form-flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
</style>
