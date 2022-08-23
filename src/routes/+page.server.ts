import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

export const load: PageServerLoad = async () => {
	const prisma = new PrismaClient();

	const galleries = await prisma.gallery.findMany({
		select: {
			id: true,
			cover_photo: true,
			name: true
		}
	});

	return { galleries };
};
