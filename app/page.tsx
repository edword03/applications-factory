import { AddTodoForm } from '@/components/add-todo-form/AddTodoForm';
import { TodoList } from '@/components/todo-list/TodoList';
import { Filters } from '@/components/filters/Filters';
import { Header } from '@/components/header/Header';

export default function Home() {
	return (
		<main className="mx-auto px-1.5 max-w-4xl">
			<Header />
			<AddTodoForm />
			<Filters />
			<TodoList />
		</main>
	);
}
