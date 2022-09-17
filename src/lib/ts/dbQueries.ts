import { prisma } from '$lib/prisma';

export async function getImagesByGalleryId(id: string) {
	return await prisma.image.findMany({
		where: {
			gallery_id: Number(id)
		},
		select: {
			image: true,
			thumbnail_image: true
		}
	});
}

export async function getGalleryNameById(id: string) {
	return await prisma.gallery.findUnique({
		where: {
			id: Number(id)
		},
		select: {
			name: true
		}
	});
}
