import { browser } from '$app/environment';
import { invalidate } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	if (!browser) return;

	// Get the supabase redirect type
	const hash: any = location.hash
		.substring(1)
		.split('&')
		.map((h) => h.split('='))
		.reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {});

	if (hash.type === 'recovery') {
		await invalidate();
		return redirect(302, `/reset-password?${location.hash.substring(1)}`);
	}
};
