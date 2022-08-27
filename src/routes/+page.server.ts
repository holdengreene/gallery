import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const galleries = await prisma.gallery.findMany({
		select: {
			id: true,
			cover_photo: true,
			name: true
		}
	});

	return { galleries };
};
