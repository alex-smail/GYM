export const calcDiscountPercent = (price: number, full: number): number => {
	if (!Number.isFinite(price) || !Number.isFinite(full)) return 0;
	if (full <= 0 || price >= full) return 0;

	const pct = Math.round(((full - price) / full) * 100);

	return Math.max(0, Math.min(100, pct));
};
