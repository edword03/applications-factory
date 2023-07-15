import { useEffect, useState } from 'react';
import {
	changeTheme,
	ThemeTypes,
	useTypeDispatch,
	useTypeSelector,
} from '@/store';

export const useDarkMode = () => {
	const localTheme = localStorage.getItem('theme') as ThemeTypes;
	const currentTheme = useTypeSelector((state) => state.themeReducer);

	const dispatch = useTypeDispatch();
	const [isToggle, setIsToggle] = useState(false);

	console.log(currentTheme);

	const toggleTheme = () => {
		if (currentTheme === ThemeTypes.DARK) {
			localStorage.setItem('theme', ThemeTypes.LIGHT);
			setIsToggle(false);
			dispatch(changeTheme(ThemeTypes.LIGHT));
		} else {
			localStorage.setItem('theme', ThemeTypes.DARK);
			setIsToggle(true);
			dispatch(changeTheme(ThemeTypes.DARK));
		}
	};

	useEffect(() => {
		if (localTheme) {
			dispatch(changeTheme(localTheme));
			setIsToggle(localTheme === ThemeTypes.DARK);
			document.documentElement.className =
				localTheme === ThemeTypes.DARK ? 'dark' : '';
		}
	}, [localTheme]);

	return { isToggle, toggleTheme };
};
