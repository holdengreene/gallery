import { supabase } from '$lib/supabaseClient';
import { invalid, redirect, type Actions } from '@sveltejs/kit';
import type { CookieSerializeOptions } from 'cookie';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/admin');
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const values = await request.formData();

		const username = values.get('username');
		const password = values.get('password');

		if (!username) {
			return invalid(400, { username: 'Please enter a username' });
		}

		if (!password) {
			return invalid(400, { password: 'Please enter a password' });
		}

		const { session, error } = await supabase.auth.signIn({
			email: username.toString(),
			password: password.toString()
		});

		if (error) {
			return invalid(error.status, { login: error.message });
		}

		const cookieOptions: CookieSerializeOptions = {
			maxAge: 28_800, // 8 hours
			sameSite: 'strict',
			path: '/'
		};

		if (session?.access_token) {
			cookies.set('sb-access-token', session.access_token, cookieOptions);
		}

		if (session?.refresh_token) {
			cookies.set('sb-refresh-token', session.refresh_token, cookieOptions);
		}

		throw redirect(303, '/admin');
	}
};
