import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const images = await prisma.image.findMany({
		where: {
			gallery_id: Number(params.slug)
		},
		select: {
			image: true,
			thumbnail_image: true
		}
	});

	const galleryNameQuery = await prisma.gallery.findUnique({
		where: {
			id: Number(params.slug)
		},
		select: {
			name: true
		}
	});

	const galleryName = galleryNameQuery?.name ?? "Something that don't exist";

	return { images, galleryName };
};
