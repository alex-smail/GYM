'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useTariffs } from '../hooks';
import { TariffsGrid } from '../components/tariffs/tariffs';
import { GuaranteeBlock } from '../components/GuaranteeBlock';
import { AcceptAndBuy, InfoMessage, Span } from '../components';
import { cn } from '../utils';

export default function TariffsPage() {
	return (
		<main className="md:m-auto sm:w-[375px] md:w-[768px] lg:w-[1263px] px-4 sm:px-6 lg:px-0">
			<h1
				className={cn(
					'text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold md:mb-[105px] md:mt-[48px] md:pl-[20px] tracking-wide',
					'max-[376px]:w-[312px] max-[376px]:leading-[1.1] max-[376px]:mb-[16px]',
					'max-[321px]:text-[22px] max-[321px]:mb-[22px]'
				)}
			>
				Выбери подходящий для себя{' '}
				<Span className="text-[#FDB056]">тариф</Span>
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3">
				<div className="flex justify-center lg:justify-start">
					<div
						className={cn(
							'relative w-[250px] h-[250px] sm:w-[300px] sm:h-[351px] lg:w-[380px] lg:h-[767px] overflow-hidden md:ml-7 md:mt-13',
							'max-[321px]:w-[100px] max-[321px]:h-[200px]'
						)}
					>
						<Image
							src="/man.svg"
							alt="Мужчина с хорошей физической формой"
							fill
							className="object-contain"
							priority
						/>
						<div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#262a2b] to-transparent pointer-events-none" />
					</div>
				</div>

				<div className="lg:col-span-2 flex flex-col">
					<TariffsContent />
					<div className="md:ml-[70px]">
						<InfoMessage />
						<AcceptAndBuy />
					</div>
				</div>
			</div>

			<GuaranteeBlock />
		</main>
	);
}

function TariffsContent() {
	const { tariffs, loading, error, selectedId, setSelectedId } = useTariffs();
	const sorted = useMemo(
		() =>
			[...tariffs].sort(
				(a, b) => (b.full_price || 0) - (a.full_price || 0)
			),
		[tariffs]
	);
	if (loading) return <div className="text-gray-500">Загрузка...</div>;
	if (error) return <div className="text-red-600">{error}</div>;

	return (
		<TariffsGrid
			tariffs={sorted}
			selectedId={selectedId}
			setSelectedId={setSelectedId}
		/>
	);
}
