import { FC, useState } from 'react';
import cn from 'classnames';

import { TodoModel } from '@/shared/model/todo.model';
import { Checkbox } from '@/shared/ui/checkbox/Checkbox';
import { toggleCompleteTodo, useTypeDispatch, removeTodo } from '@/store';

import styles from './TodoItem.module.css';

type TodoItemProps = TodoModel;

export const TodoItem: FC<TodoItemProps> = ({ id, isDone, title }) => {
	const dispatch = useTypeDispatch();

	const [checked, setChecked] = useState(isDone);

	const toggleCheckbox = () => {
		setChecked(!checked);
		dispatch(toggleCompleteTodo(id));
	};

	const handleRemoveTodo = () => {
		dispatch(removeTodo(id));
	};
	// completed
	return (
		<li className="flex justify-between items-center gap-x-6 py-5 border border-gray-200 rounded dark:border-gray-700 p-4">
			<div className="flex gap-x-4 items-center">
				<Checkbox checked={checked} onChange={toggleCheckbox} />

				<div className="min-w-0 flex-auto items-center">
					<p
						className={cn(
							'dark:text-white text-xl font-semibold leading-6 text-gray-900',
							{ [styles.completed]: checked }
						)}
					>
						{title}
					</p>
				</div>
			</div>
			<div>
				<button onClick={handleRemoveTodo}>
					<svg
						style={{ color: 'red' }}
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-trash"
						viewBox="0 0 16 16"
					>
						<path
							d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
							fill="red"
						></path>
						<path
							fillRule="evenodd"
							d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
							fill="red"
						></path>
					</svg>
				</button>
			</div>
		</li>
	);
};
