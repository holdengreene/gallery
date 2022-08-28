import { supabase } from '$lib/supabaseClient';
import { error, redirect, type RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

export const GET: RequestHandler = async ({ request, setHeaders }) => {
	const cookieHeader = request.headers.get('cookie');
	const cookies = cookie.parse(cookieHeader ?? '');

	if (!cookies['sb-access-token']) return new Response('');

	const { error: supabaseError } = await supabase.auth.signOut();

	if (supabaseError) {
		throw error(supabaseError.status, supabaseError.message);
	}

	setHeaders({
		'set-cookie': [
			cookie.serialize('sb-access-token', '', { maxAge: 0 }),
			cookie.serialize('sb-refresh-token', '', { maxAge: 0 })
		]
	});

	throw redirect(302, '/');
};
