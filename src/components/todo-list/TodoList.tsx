'use client';

import { FC } from 'react';
import { useTypeSelector } from '@/store';
import { selectTodosByFilter } from '@/store/selectors';
import { TodoItem } from '@/components/todo-list/todo-item/TodoItem';

export const TodoList: FC = () => {
	const todos = useTypeSelector(selectTodosByFilter);

	return (
		<div>
			<ul>
				{todos && todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	);
};
