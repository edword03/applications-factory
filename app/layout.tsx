import '@/styles/globals.css';
import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import { Root } from '@/Root';
import cn from 'classnames';

const roboto = Roboto({
	display: 'swap',
	preload: true,
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['cyrillic'],
});

export const metadata: Metadata = {
	title: 'Todo List',
	description: 'This is todo list app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="ru">
				<body className={cn(roboto.className, 'bg-white dark:bg-slate-900')}>
					<Root>{children}</Root>
				</body>
			</html>
		</>
	);
}
