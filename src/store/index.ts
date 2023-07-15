export { store } from './store';
export { useTypeDispatch, useTypeSelector } from './hooks/useTypedHooks';
export { addTodo, removeTodo, toggleCompleteTodo } from './todos/todos.slice';
export { changeFilter, FiltersTypes } from './filters/filters.slice';
export { changeTheme, ThemeTypes } from './theme/theme.slice';
