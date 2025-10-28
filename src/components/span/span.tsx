import React from 'react';

type SpanProps = {
	children: React.ReactNode;
	className?: string;
};

export const Span: React.FC<SpanProps> = ({
	children,
	className = 'text-amber-300',
	...props
}) => {
	return <span className={className} {...props}>{children}</span>;
};
