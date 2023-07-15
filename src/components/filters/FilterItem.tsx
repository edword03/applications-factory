import { FC, MouseEvent, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './filters.module.css';

type FilterItemProps = {
	isActive: boolean;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const FilterItem: FC<PropsWithChildren<FilterItemProps>> = ({
	isActive,
	children,
	onClick,
}) => {
	return (
		<button
			className={cn(
				'dark:bg-slate-600 dark:text-white rounded cursor-pointer px-6 py-1 text-gray-500 font-semibold',
				{
					[styles.activeFilter]: isActive,
				}
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
