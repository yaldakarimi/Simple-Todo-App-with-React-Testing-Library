import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";
import userEvents from "@testing-library/user-event";

const mockedSetTodos = jest.fn();

describe("AddInput functionality", () => {
	it("should render an input", async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
		const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElm).toBeInTheDocument();
	});

	it("should change the input value when user types", async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
		const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElm, { target: { value: "do sth" } });
		expect(inputElm.value).toBe("do sth");
	});

	it("should be empty after clicking on add button", async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
		const addBtn = screen.getByRole("button", { name: /Add/i });
		const inputElm = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElm, { target: { value: "do sth" } });
		fireEvent.click(addBtn);
		expect(inputElm.value).toBe("");
	});
});
