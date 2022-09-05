export async function sendForm(form: HTMLFormElement, action: string) {
	const response = await fetch(action, {
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
