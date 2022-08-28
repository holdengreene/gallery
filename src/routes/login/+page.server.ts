import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import cookie from 'cookie';
import type { Action, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/admin');
	}
};

export const POST: Action = async ({ request, setHeaders }) => {
	const values = await request.formData();

	const username = values.get('username');
	const password = values.get('password');

	if (!username) {
		return {
			status: 400,
			errors: {
				username: 'Please enter a username'
			}
		};
	}

	if (!password) {
		return {
			status: 400,
			errors: {
				password: 'Please enter a password'
			}
		};
	}

	const { session, error } = await supabase.auth.signIn({
		email: username.toString(),
		password: password.toString()
	});

	if (error) {
		return {
			status: error.status,
			errors: {
				login: error.message
			}
		};
	}

	const cookieOptions: cookie.CookieSerializeOptions = {
		maxAge: 28_800, // 8 hours
		httpOnly: true,
		sameSite: 'strict',
		path: '/',
		secure: true
	};

	const accessTokenCookie = session?.access_token
		? cookie.serialize('sb-access-token', session.access_token, cookieOptions)
		: '';
	const refreshTokenCookie = session?.refresh_token
		? cookie.serialize('sb-refresh-token', session.refresh_token, cookieOptions)
		: '';

	setHeaders({
		'set-cookie': [accessTokenCookie, refreshTokenCookie]
	});

	return {
		location: '/admin'
	};
};
