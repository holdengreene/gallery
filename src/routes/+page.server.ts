import { galleries } from '$lib/galleries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { galleries };
};
