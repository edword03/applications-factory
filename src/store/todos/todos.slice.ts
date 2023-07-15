import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from '@/shared/model/todo.model';

interface InitialState {
	todos: TodoModel[];
}

const initialState: InitialState = {
	todos: [],
};

const todosSlice = createSlice({
	name: 'todos-slice',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<TodoModel>) {
			state.todos.unshift(action.payload);
		},
		removeTodo(state, action: PayloadAction<string>) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleCompleteTodo(state, action: PayloadAction<string>) {
			const foundTodo = state.todos.find((todo) => todo.id === action.payload);

			if (foundTodo) {
				foundTodo.isDone = !foundTodo.isDone;
			}
		},
	},
});

export const { reducer: todosReducer } = todosSlice;
export const { addTodo, removeTodo, toggleCompleteTodo } = todosSlice.actions;
