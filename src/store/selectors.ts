import { RootState } from './store';
import { createSelector } from 'reselect';
import { FiltersTypes } from '@/store/filters/filters.slice';

export const todosSelector = (state: RootState) => state.todosReducer.todos;
export const filterSelector = (state: RootState) => state.filterReducer;

export const selectTodosByFilter = createSelector(
	[todosSelector, filterSelector],
	(allTodos, activeFilter) => {
		if (activeFilter === FiltersTypes.ALL) {
			return allTodos;
		}

		if (activeFilter === FiltersTypes.COMPLETED) {
			return allTodos.filter((todo) => todo.isDone);
		}

		if (activeFilter === FiltersTypes.NOT_COMPLETED) {
			return allTodos.filter((todo) => !todo.isDone);
		}
	}
);
