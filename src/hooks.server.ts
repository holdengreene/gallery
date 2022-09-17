import { supabase } from '$lib/supabaseClient';
import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookieHeader = event.request.headers.get('cookie');
	const cookies = cookie.parse(cookieHeader ?? '');

	const accessTokenCookie = cookies['sb-access-token'];

	if (!accessTokenCookie) return await resolve(event);

	supabase.auth.setAuth(accessTokenCookie);
	const session = await supabase.auth.api.getUser(accessTokenCookie);

	if (session?.user?.email) {
		event.locals.user = { username: session.user.email };
	}

	return await resolve(event);
};
