export function formatDate(date: Date) {
	if (date instanceof Date && !isNaN(date.valueOf())) {
		return date.toLocaleDateString('en-US');
	}

	return new Date().toLocaleDateString('en-US');
}
