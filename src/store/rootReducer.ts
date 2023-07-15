import { combineReducers } from 'redux';
import { todosReducer } from './todos/todos.slice';
import { filterReducer } from './filters/filters.slice';
import { themeReducer } from './theme/theme.slice';

export const rootReducer = combineReducers({
	todosReducer,
	filterReducer,
	themeReducer,
});
