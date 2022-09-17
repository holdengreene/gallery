import { getImagesByGalleryId, getGalleryNameById } from '$lib/ts/dbQueries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const images = await getImagesByGalleryId(params.slug);

	const galleryNameQuery = await getGalleryNameById(params.slug);

	const galleryName = galleryNameQuery?.name ?? "Something that don't exist";

	return { images, galleryName };
};
