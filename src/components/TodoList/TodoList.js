import { FaTimes, FaCheck } from "react-icons/fa";

export default function TodoList({ todos, setTodos }) {
	const updateTodo = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
				return todo;
			} else {
				return todo;
			}
		});

		setTodos(updatedTodos);
	};

	const deleteTodo = (id) => {
		const remainingTodos = todos.filter((todo) => todo.id !== id);
		setTodos(remainingTodos);
	};

	return (
		<div className=" mb-10 bg-gray-100 p-5 shadow-md rounded-md ">
			<h2 className="text-2xl font-semibold mb-5">Todo List</h2>
			{todos.length === 0 ? (
				<p>No Todos have been added yet!!!</p>
			) : (
				todos.map((todo) => (
					<div
						key={todo.id}
						className=" border-b-2 border-white mb-5 flex justify-between"
					>
						<h2
							data-testid="todoTitle"
							className={`pb-2 font-medium text-gray-600 ${
								todo.isCompleted ? "line-through" : ""
							}`}
						>
							{todo.task}
						</h2>

						<div>
							<button
								type="button"
								data-testid="completeBtn"
								className="bg-green-500 text-white p-1 rounded-md"
								onClick={(e) => updateTodo(todo.id)}
							>
								<FaCheck />
							</button>

							<button
								data-testid="deleteBtn"
								type="button"
								className="bg-red-500 text-white p-1 rounded-md ml-1"
								onClick={() => deleteTodo(todo.id)}
							>
								<FaTimes />
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
}
