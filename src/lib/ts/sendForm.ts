export async function sendForm(form: HTMLFormElement) {
	const response = await fetch('/login', {
		method: form.method,
		headers: { accept: 'application/json' },
		body: new FormData(form)
	});

	if (!response.ok) {
		const { errors } = await response.json();

		return { formErrors: errors };
	}

	return { success: true };
}
