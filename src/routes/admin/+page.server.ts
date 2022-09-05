import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const galleries = await prisma.gallery.findMany({
		include: {
			_count: {
				select: { image: true }
			}
		}
	});

	return { galleries };
};
