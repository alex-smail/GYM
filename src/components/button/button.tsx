import React from 'react';
import { cn } from '../../utils';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: Props) => {
	return (
		<button
			{...props}
			className={cn(
				'px-8 py-3 text-black font-semibold bg-[#FDB056] hover:bg-[#fdaf56d9] focus:outline-none focus:ring-2 focus:bg-[#fdaf56d9]',
				className
			)}
		/>
	);
};
