import { prisma } from '$lib/prisma';
import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const values = await request.formData();

		const galleryName = values.get('name') as string | undefined;
		const category = values.get('category') as string | undefined;
		const coverPhoto = values.get('cover-photo') as string | undefined;

		if (!galleryName) {
			return invalid(400, { galleryName: 'Please enter a gallery name' });
		}

		if (!category) {
			return invalid(400, { category: 'Please enter a category' });
		}

		if (!coverPhoto) {
			return invalid(400, { coverPhoto: 'Please enter a cover photo' });
		}

		const createdGallery = await prisma.gallery.create({
			data: {
				name: galleryName,
				category,
				cover_photo: coverPhoto
			}
		});

		console.log(createdGallery);
	}
};
