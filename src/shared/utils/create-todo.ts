import { v4 } from 'uuid';
import { TodoModel } from '@/shared/model/todo.model';

export const createTodo = (title: string): TodoModel => ({
	id: v4(),
	title,
	isDone: false,
});
