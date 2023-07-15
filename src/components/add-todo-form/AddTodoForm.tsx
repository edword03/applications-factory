'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { addTodo, useTypeDispatch } from '@/store';

import { Button } from '@/shared/ui/button/Button';
import { createTodo } from '@/shared/utils/create-todo';

export const AddTodoForm = () => {
	const [title, setTitle] = useState<string>('');

	const dispatch = useTypeDispatch();

	// создание новой туду
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!title.length) return;

		const newTodo = createTodo(title.trim());

		dispatch(addTodo(newTodo));
		setTitle('');
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	return (
		<form className="mt-4" onSubmit={onSubmit}>
			<div className="relative rounded-md shadow-sm">
				<input
					value={title}
					onChange={handleChange}
					type="text"
					className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0 transition-colors"
					placeholder="Введите название задачи..."
				/>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<Button type="submit">Добавить</Button>
				</div>
			</div>
		</form>
	);
};
