import React, { useEffect, useState } from 'react';
import { Tariff } from '../../../../types';
import { calcDiscountPercent, cn } from '../../../../utils';
import { useDiscount } from '../../../../components/discount-context/discount-context';

type Props = {
	tariff: Tariff;
	selected: boolean;
	onSelect: (id: string) => void;
};

export const TariffCard = ({ tariff: t, selected, onSelect }: Props) => {
	const { discountActive } = useDiscount();
	const discountPercent = calcDiscountPercent(t.price, t.full_price);
	const showDiscount = discountActive && discountPercent > 0;
	const displayedDiscountPercent = t.is_best ? 70 : discountPercent;

	const [text, setText] = useState(t.text);

	useEffect(() => {
		const handleResize = () => {
			if (t.is_best && window.innerWidth <= 375) {
				setText('Всегда быть в форме');
			} else {
				setText(t.text);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [t]);

	return (
		<button
			type="button"
			onClick={() => onSelect(t.id)}
			className={cn(
				'relative text-left rounded-[34px] transition shadow-md hover:shadow-lg focus:outline-none',
				'max-[376px]:h-[135px] max-[376px]:w-full max-[376px]:rounded-[24px]',
				'max-[321px]:h-[118px]',
				selected
					? 'border-2 border-[#FDB056]'
					: 'border-2 border-[#484D4E]',
				t.is_best
					? 'w-full lg:w-[748px] h-[194px]'
					: 'w-[288px] sm:w-[343px] md:w-[240px] lg:w-[240px] h-[335px]'
			)}
		>
			<div
				className={cn(
					'rounded-[34px] card-surface w-full h-full',
					'max-[376px]:p-[20px_16px_20px_30px] max-[376px]:rounded-[24px]',
					'max-[321px]:p-[30px_16px_20px_18px]',
					t.is_best && 'pl-[40px] pt-[7px]'
				)}
			>
				{/* Скидка */}
				{showDiscount && (
					<span
						className={cn(
							'absolute top-0 text-white uppercase tracking-wide bg-[#FD5656] rounded-b-[8px] flex items-center justify-center',
							'font-medium',
							'right-4 md:left-14 md:right-auto',
							'sm:w-[48px] sm:h-[27px] lg:w-[66px] lg:h-[39px]',
							'sm:text-[16px] lg:text-[22px]',
							'max-[321px]:text-[11px] max-[321px]:w-[42px] max-[321px]:h-[23px] max-[321px]:pb-[3px]',
							'max-[376px]:w-[48px] max-[376px]:h-[27px]',
							t.is_best
								? 'max-[376px]:right-[60px] max-[321px]:right-[48px]'
								: 'max-[376px]:right-[27px]'
						)}
					>
						-{displayedDiscountPercent}%
					</span>
				)}

				{/* Хит */}
				{t.is_best && (
					<span
						className={cn(
							'absolute top-4 right-4 font-extrabold uppercase tracking-wide text-[#FDB056] sm:text-[16px]',
							'max-[321px]:text-[10px] max-[321px]:right-[14px] max-[321px]:top-[7px]',
							'max-[376px]:right-[12px] max-[376px]:top-[8px]'
						)}
					>
						хит!
					</span>
				)}

				{/* Контент */}
				<div
					className={cn(
						'flex h-full',
						t.is_best
							? 'flex-row items-center md:justify-between max-w-[546px] mx-auto md:gap-[6px]'
							: 'flex-col flex items-center md:justify-around md:p-4 max-[376px]:flex-row'
					)}
				>
					{/* Информация о тарифе */}
					<div
						className={cn(
							'flex flex-col gap-2',
							'max-[376px]:w-[123px] max-[376px]:h-[91px] items-start'
						)}
					>
						{/* Период тарифа */}
						<div
							className={cn(
								'font-semibold',
								// 16px на мобилках, 18px на планшетах, 26px на десктопе
								'lg:text-[26px]',
								'max-[376px]:text-start max-[376px]:text-[17px]',
								'max-[321px]:text-[16px]',
								t.is_best
									? 'md:text-a md:pt-[8px] md:text-center md:pl-[28px]'
									: 'md:text-center md:pt-[32px]'
							)}
						>
							{t.period}
						</div>

						{/* Цена */}
						<div
							className={cn(
								'flex flex-col relative',
								'max-[376px]:w-[123px]',
								'max-[321px]:items-start',
								t.is_best
									? 'items-start w-[205px] text-start max-[376px]:w-[140px]'
									: 'md:items-end md:pt-[16px]'
							)}
						>
							{/* Цена (со скидкой, пока таймер активен; иначе полная) */}
							<span
								className={cn(
									'font-extrabold leading-tight md:pb-[36px]',
									// текст
									'max-[321px]:text-[30px] max-[376px]:text-[34px] lg:text-[50px]',
									selected ? 'text-[#FDB056]' : 'text-white'
								)}
							>
								{showDiscount ? t.price : t.full_price} ₽
							</span>

							{/* Цена без скидки */}
							{showDiscount && (
								<span
									className={cn(
										'text-muted line-through opacity-70 absolute md:bottom-[12px] md:right-[4px]',
										'max-[321px]:text-[14px] lg:text-[24px] max-[321px]:top-[30px] max-[321px]:right-[17px]',
										'max-[376px]:text-[16px] max-[376px]:top-[37px] max-[376px]:right-[9px]'
									)}
								>
									{t.full_price} ₽
								</span>
							)}
						</div>
					</div>

					{/* Описание */}
					<p
						className={cn(
							'text-muted leading-relaxed text-[14px] md:text-[16px]',
							'max-[321px]:ml-[14px] max-[321px]:leading-[17px] max-[321px]:pb-[8px]',
							'max-[376px]:ml-[46px] max-[376px]:leading-[20px]',
							t.is_best
								? 'max-w-[340px] md:pl-[8px] max-[376px]:w-[89px] max-[376px]:ml-[30px]'
								: 'max-w-[360px]'
						)}
					>
						{text}
					</p>
				</div>
			</div>
		</button>
	);
};
