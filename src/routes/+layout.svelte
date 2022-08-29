<div class="full-background">
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss" global>
	@use 'modern-normalize/modern-normalize';

	.full-background {
		background-color: #f9f9f9;
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
