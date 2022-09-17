import { supabase } from '$lib/supabaseClient';
import { error, invalid, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, url }) => {
		const values = await request.formData();
		const accessToken = url.searchParams.get('access_token');

		if (!accessToken) {
			throw error(403, 'No access token');
		}

		const password = values.get('password');

		if (!password) {
			return invalid(400, {
				password: 'No password entered'
			});
		}

		const { error: supabaseError } = await supabase.auth.api.updateUser(accessToken, {
			password: password.toString()
		});

		if (supabaseError) {
			return invalid(supabaseError.status, { password: supabaseError.message });
		}

		throw redirect(303, '/login');
	}
};
