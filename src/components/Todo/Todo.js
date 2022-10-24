import { useState } from "react";
import PageHeader from "../PageHeader/PageHeader";
import AddInput from "../AddInput/AddInput";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter.js/TodoFooter";

export default function Todo() {
	const [todos, setTodos] = useState([]);
	return (
		<div className="px-5">
			<PageHeader title="Todo" />
			<AddInput setTodos={setTodos} todos={todos} />
			<TodoList todos={todos} setTodos={setTodos} />
			<TodoFooter numberOfTodos={todos.length} />
		</div>
	);
}
