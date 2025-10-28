'use client';

import { useState } from 'react';
import { Button } from '../button/button';
import { CheckboxWithLabel } from './components/checkbox-with-label/checkbox-with-label';
import { cn } from '../../utils';

export const AcceptAndBuy = () => {
	const [acceptChecked, setAcceptChecked] = useState(false);
	const [showCheckboxError, setShowCheckboxError] = useState(false);

	const handleBuy = () => {
		if (!acceptChecked) {
			setShowCheckboxError(true);
			return;
		}
	};

	const handleCheckboxChange = (checked: boolean) => {
		setAcceptChecked(checked);
		if (checked) setShowCheckboxError(false);
	};

	return (
		<>
			<div className="mt-7 flex gap-3 max-[376px]:mt-[22px] max-[321px]:mt-[11px]">
				<CheckboxWithLabel
					checked={acceptChecked}
					onChange={handleCheckboxChange}
					invalid={showCheckboxError}
				>
					Я согласен с{' '}
					<span className="underline underline-offset-2 cursor-pointer">
						офертой рекуррентных платежей
					</span>{' '}
					и{' '}
					<span className="underline underline-offset-2 cursor-pointer">
						Политикой конфиденциальности
					</span>
				</CheckboxWithLabel>
			</div>

			<div className="mt-[13px] max-[376px]:mt-[15px]">
				<Button
					onClick={handleBuy}
					className={cn(
						'bg-[#FDB056] hover:bg-[#E6A047] text-black font-bold py-4 px-6 rounded-[19px] text-lg md:text-xl w-[352px] h-[66px]',
						'max-[376px]:w-[343px] max-[376px]:h-[63px]',
						'max-[321px]:w-[288px] max-[321px]:h-[55px]'
					)}
				>
					Купить
				</Button>
			</div>

			<div className={cn(
				'mt-4 text-sm text-muted w-[748px] leading-[17px]',
				'max-[376px]:w-[345px] max-[376px]:text-[10px] max-[376px]:leading-[13px]',
				'max-[321px]:w-[288px] max-[321px]:leading-[12px] max-[321px]:mt-[11px]'
			)}>
				Нажимая кнопку «Купить», Пользователь соглашается на разовое
				списание денежных средств для получения пожизненного доступа к
				приложению. Пользователь соглашается, что данные
				кредитной/дебетовой карты будут сохранены для осуществления
				покупок дополнительных услуг сервиса в случае желания
				пользователя.
			</div>
		</>
	);
};
