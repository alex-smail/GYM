import { useEffect, useState } from 'react';
import { Tariff } from '../types';
import { ENDPOINT_TARIFFS } from '../constants';

export const useTariffs = () => {
	const [tariffs, setTariffs] = useState<Tariff[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	useEffect(() => {
		const load = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await fetch(ENDPOINT_TARIFFS, {
					cache: 'no-store',
				});
				if (!res.ok) throw new Error('Failed to fetch tariffs');

				const data: Tariff[] = (await res.json()).map((t, index) => {
					// Устанавливаем правильные скидки в зависимости от периода
					let discountPercent = 0;
					if (t.period.toLowerCase().includes('3 месяц')) {
						discountPercent = 50;
					} else if (t.period.toLowerCase().includes('1 месяц')) {
						discountPercent = 40;
					} else if (t.period.toLowerCase().includes('1 недел')) {
						discountPercent = 30;
					}

					// Пересчитываем full_price на основе скидки
					const newFullPrice =
						discountPercent > 0
							? Math.round(t.price / (1 - discountPercent / 100))
							: t.full_price;

					return {
						...t,
						id: `${t.id}-${index}`, // добавляем индекс, чтобы id стали уникальными. На сервере ошибка с задвоением id!!
						full_price: newFullPrice,
					};
				});
				
				setTariffs(data);

				// Ищем тариф с is_best: true для автоматического выбора
				const best = data.find((t) => t.is_best) ?? data[0] ?? null;
				setSelectedId(best ? best.id : null);
			} catch (e: unknown) {
				setError(e instanceof Error ? e.message : 'Unknown error');
			} finally {
				setLoading(false);
			}
		};
		load();
	}, []);

	return { tariffs, loading, error, selectedId, setSelectedId };
};
