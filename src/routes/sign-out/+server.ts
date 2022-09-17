import { supabase } from '$lib/supabaseClient';
import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies }) => {
	if (!cookies.get('sb-access-token')) return new Response('');

	const { error: supabaseError } = await supabase.auth.signOut();

	if (supabaseError) {
		throw error(supabaseError.status, supabaseError.message);
	}

	cookies.delete('sb-access-token');
	cookies.delete('sb-refresh-token');

	throw redirect(302, '/');
};
