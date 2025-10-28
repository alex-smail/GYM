'use client';

import React from 'react';
import { useDiscount } from '../discount-context/discount-context';
import { formatMMSS } from './utils';
import { Span } from '../span/span';
import { WARNING_THRESHOLD_SECONDS } from '../../constants';

export const HeaderBanner = () => {
	const { remainingSeconds } = useDiscount();

	const isWarning =
		remainingSeconds <= WARNING_THRESHOLD_SECONDS && remainingSeconds > 0;
	const isExpired = remainingSeconds <= 0;

	return (
		<header className="fixed top-0 inset-x-0 z-50">
			<div className="mx-auto">
				{/* Баннер */}
				<div
					className={`
						bg-[#1D5B43] text-emerald-50 shadow-md
						flex flex-col items-center justify-center px-5
						h-[103px]

						max-[376px]:h-[85px]

						max-[321px]:h-[74px]
					`}
				>
					{/* Заголовок */}
					<Span
						className={`
							font-semibold font-[Montserrat] opacity-90
							text-[24px]

							max-[376px]:text-[18px]
							max-[376px]:w-[336px]

							max-[321px]:text-[14px]
							max-[321px]:text-center
							max-[321px]:mt-[3px]
						`}
					>
						Успейте открыть пробную неделю
					</Span>

					{/* Таймер */}
					<Span
						className={
							`font-mono font-semibold transition-colors duration-300 flex items-center flex-nowrap gap-2` +
							(isExpired
								? 'text-white'
								: isWarning
								? 'text-[#FF4E4E] animate-pulse'
								: 'text-[#FFBB00]')
						}
						aria-live="polite"
						aria-atomic="true"
					>
						<Span className="text-[14px]">✦</Span>
						<Span
							className={`

								text-[40px] md:min-w-[130px] text-center

								max-[376px]:text-[32px]
								max-[376px]:min-w-[110px]

								max-[321px]:text-[28px]
								max-[321px]:min-w-[100px]
							`}
						>
							{formatMMSS(Math.max(remainingSeconds, 0))}
						</Span>
						<Span className="text-[14px]">✦</Span>
					</Span>
				</div>
			</div>
		</header>
	);
};
