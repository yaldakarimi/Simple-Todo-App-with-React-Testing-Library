import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = (tasks) => {
	const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
	const addBtn = screen.getByRole("button", { name: "Add" });
	tasks.forEach((task) => {
		fireEvent.change(inputElm, { target: { value: task } });
		fireEvent.click(addBtn);
	});
};

describe("check overall functionality of todo comp", () => {
	it("should render the added todo item in the todo list", async () => {
		render(<MockedTodo />);
		addTask(["do sth"]);
		const todoItem = screen.getByTestId("todoTitle");
		expect(todoItem.textContent).toBe("do sth");
	});

	it("should render all added todos  in the todo list", async () => {
		render(<MockedTodo />);
		addTask(["do sth", "do the dishes", "walk the dog"]);
		const todoItems = screen.getAllByTestId("todoTitle");
		expect(todoItems.length).toBe(3);
	});

	it("todo item should not have line through class when initially rendered", async () => {
		render(<MockedTodo />);
		addTask(["do sth"]);
		const todoItem = screen.getByTestId("todoTitle");
		expect(todoItem).not.toHaveClass("line-through");
	});

	it("todo item should  have line through class when complete btn is clicked", async () => {
		render(<MockedTodo />);
		addTask(["do sth"]);
		const todoItem = screen.getByTestId("todoTitle");
		const completeBtn = screen.getByTestId("completeBtn");
		fireEvent.click(completeBtn);
		expect(todoItem).toHaveClass("line-through");
	});

	it("todo item should  be deleted when delete btn is clicked", async () => {
		render(<MockedTodo />);
		addTask(["do sth"]);
		const todoItem = screen.getByTestId("todoTitle");
		const deleteBtn = screen.getByTestId("deleteBtn");
		fireEvent.click(deleteBtn);
		expect(todoItem).not.toBeInTheDocument();
	});
});
