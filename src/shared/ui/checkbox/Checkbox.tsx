import { FC, HTMLProps } from 'react';

interface CheckboxProps extends HTMLProps<HTMLInputElement> {}

export const Checkbox: FC<CheckboxProps> = ({
	checked,
	onChange,
	...props
}) => {
	return (
		<div className="flex items-center">
			<input
				checked={checked}
				onChange={onChange}
				type="checkbox"
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
				{...props}
			/>
		</div>
	);
};
