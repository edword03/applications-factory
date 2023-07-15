'use client';

import { Toggle } from '@/shared/ui/toggle/Toggle';

import { useDarkMode } from './useDarkMode';

export const Header = () => {
	const { isToggle, toggleTheme } = useDarkMode();

	return (
		<header>
			<h1 className="dark:text-white text-3xl font-bold text-center py-4">
				Todo list
			</h1>
			<Toggle checked={isToggle} onChange={toggleTheme} />
		</header>
	);
};
