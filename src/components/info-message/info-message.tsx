import React from 'react';
import { cn } from '../../utils';

export const InfoMessage = () => (
	<div
		className={cn(
			'p-[18px_24px_18px_30px] bg-[#2f3435] mt-[19px] w-[500px] rounded-[20px]',
			'max-[376px]:w-[343px] max-[376px]:h-[76px] max-[376px]:mt-[9px] max-[376px]:p-[14px_47px_18px_22px]',
			'max-[321px]:w-[288px] max-[321px]:mt-[16px] max-[321px]:p-[14px_30px_18px_22px]'
		)}
	>
		<div className="flex items-start gap-3">
			<span className="text-[#FDB056] text-xl font-bold">!</span>
			<p
				className={cn(
					'text-[16px] text-white leading-[22px]',
					'max-[376px]:text-[12px] max-[376px]:leading-[15px]'
				)}
			>
				Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
				результат, чем за 1 месяц
			</p>
		</div>
	</div>
);
