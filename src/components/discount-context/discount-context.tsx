'use client';

import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

type DiscountContextValue = {
	remainingSeconds: number;
	discountActive: boolean;
};

type DiscountProviderProps = {
	children: React.ReactNode;
	initialSeconds?: number;
};

const DiscountContext = createContext<DiscountContextValue | undefined>(
	undefined
);

export const DiscountProvider = ({
	children,
	initialSeconds = 120,
}: DiscountProviderProps) => {
	const [remainingSeconds, setRemainingSeconds] =
		useState<number>(initialSeconds);
	const intervalRef = useRef<number | null>(null);

	useEffect(() => {
		if (intervalRef.current !== null) return;
		intervalRef.current = window.setInterval(() => {
			setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => {
			if (intervalRef.current !== null)
				window.clearInterval(intervalRef.current);
		};
	}, []);

	const value = useMemo<DiscountContextValue>(() => {
		return {
			remainingSeconds,
			discountActive: remainingSeconds > 0,
		};
	}, [remainingSeconds]);

	return (
		<DiscountContext.Provider value={value}>
			{children}
		</DiscountContext.Provider>
	);
};

export function useDiscount() {
	const ctx = useContext(DiscountContext);
	if (!ctx)
		throw new Error('useDiscount должен использоваться в DiscountProvider');
	return ctx;
}
