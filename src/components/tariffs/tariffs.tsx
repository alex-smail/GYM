import React from 'react';
import { Tariff } from '../../types';
import { TariffCard } from './components';

type Props = {
	tariffs: Tariff[];
	selectedId: string | null;
	setSelectedId: (id: string) => void;
};

export const TariffsGrid = ({ tariffs, selectedId, setSelectedId }: Props) => {
	const hitTariff = tariffs.find((t) => t.is_best);
	const otherTariffs = tariffs.filter((t) => !t.is_best);

	return (
		<div className="space-y-6 md:ml-18">
			{/* Тариф "Хит" - крупный блок сверху */}
			{hitTariff && (
				<div className="mb-3 max-[376px]:mb-[5px]">
					<TariffCard
						key={hitTariff.id}
						tariff={hitTariff}
						selected={selectedId === hitTariff.id}
						onSelect={setSelectedId}
					/>
				</div>
			)}

			{/* Остальные тарифы */}
			<div className="flex flex-col md:flex-row gap-[12px] flex-wrap max-[376px]:gap-[4px]">
				{otherTariffs.map((t) => (
					<TariffCard
						key={t.id}
						tariff={t}
						selected={selectedId === t.id}
						onSelect={setSelectedId}
					/>
				))}
			</div>
		</div>
	);
};
