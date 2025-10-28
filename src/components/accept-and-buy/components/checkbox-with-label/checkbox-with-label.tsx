import React from 'react';
import { cn } from '../../../../utils/cn';

type Props = {
	checked: boolean;
	onChange: (checked: boolean) => void;
	invalid?: boolean;
	children: React.ReactNode;
};

export const CheckboxWithLabel = ({
	checked,
	onChange,
	invalid,
	children,
}: Props) => (
	<label className="flex items-center gap-3 cursor-pointer max-[321px]:gap-[7px]">
		<input
			type="checkbox"
			checked={checked}
			onChange={(e) => onChange(e.target.checked)}
			className={cn(
				// базовые стили
				'w-8 h-8 appearance-none rounded-sm border-2 transition-colors duration-200 mb-1.5 leading-4 pt-1.5',
				// бордер
				invalid ? 'border-red-500' : 'border-[#484D4E]',
				// галочка
				'checked:bg-[#2f3435] checked:border-[#FDB056] checked:before:content-["✓"] checked:before:text-[#FDB056] checked:before:text-[20px] checked:before:flex checked:before:items-center checked:before:justify-center'
			)}
		/>
		<span
			className={cn(
				'text-white text-xs md:text-base leading-4 w-[505px]',
				invalid && 'text-red-500',
				'max-[376px]:w-[293px]',
				'max-[321px]:w-[252px] max-[321px]:leading-[15px] max-[321px]:pt-[3px]'
			)}
		>
			{children}
		</span>
	</label>
);
