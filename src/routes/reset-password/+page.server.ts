import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { Action } from './$types';

export const POST: Action = async ({ request, url }) => {
	const values = await request.formData();
	const accessToken = url.searchParams.get('access_token');

	if (!accessToken) {
		throw error(403, 'No access token');
	}

	const password = values.get('password');

	if (!password) {
		return {
			status: 400,
			errors: {
				password: 'No password entered'
			}
		};
	}

	const { error: supabaseError } = await supabase.auth.api.updateUser(accessToken, {
		password: password.toString()
	});

	if (supabaseError) {
		return {
			status: supabaseError.status,
			errors: {
				password: supabaseError.message
			}
		};
	}

	return {
		location: '/login'
	};
};
