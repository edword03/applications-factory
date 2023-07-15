import { FC, HTMLProps, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './button.module.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	type: 'submit' | 'button';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	type,
	className,
	...props
}) => {
	return (
		<button
			type={type}
			className={cn(
				className,
				styles.button,
				'bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded transition-colors'
			)}
			{...props}
		>
			{children}
		</button>
	);
};
