import React from 'react';
import { cn } from '../../utils';

export const GuaranteeBlock = () => (
	<div
		className={cn(
			'border border-emerald-700/50 bg-transparent p-5 text-2xl text-muted w-auto md:mt-[63px] mb-[150px] md:ml-[24px] h-[233px] flex flex-col items-start rounded-[34px] md:gap-7 pr-[40px]',
			'max-[376px]:text-[14px] max-[376px]:mt-[21px] max-[376px]:p-[11px_13px] max-[376px]:rounded-[17px] max-[376px]:h-[186px] max-[376px]:gap-[6px]',
			'max-[321px]:text-[13px] max-[321px]:p-[11px_10px] max-[321px]:gap-[10px] max-[321px]:leading-[17px] max-[321px]:h-[194px]'
		)}
	>
		<span
			className={cn(
				'inline-block rounded-full text-[#81FE95] border border-[#81FE95]  text-[28px] w-auto h-[68px] content-center text-center p-[0_32px]',
				'max-[376px]:text-[18px] max-[376px]:px-[12px] max-[376px]:w-[293px] max-[376px]:h-[44px]',
				'max-[321px]:text-[16px] max-[321px]:w-[265px]'
			)}
		>
			гарантия возврата 30 дней
		</span>
		Мы уверены, что наш план сработает для тебя и ты увидишь видимые
		результаты уже через 4 недели. Мы даже готовы полностью вернуть твои
		деньги в течение 30 дней с момента покупки, если ты не получишь видимых
		результатов.
	</div>
);
