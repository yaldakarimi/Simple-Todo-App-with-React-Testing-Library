import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfTodos }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfTodos={numberOfTodos} />
		</BrowserRouter>
	);
};

//note: if there is a react router link in the component itself then first the component should be wrapped around BrowserRouter

describe("test to see if the number of todos is displayed correctly", () => {
	it("should render the number of incomplete todos", async () => {
		render(<MockTodoFooter numberOfTodos={3} />);
		const footerElm = screen.getByText(/3 tasks left!/i);
		expect(footerElm).toBeInTheDocument();
	});

	it("should render the word task if there is one todo left", async () => {
		render(<MockTodoFooter numberOfTodos={1} />);
		const footerElm = screen.getByTestId("todosNumberText");
		expect(footerElm.textContent).toBe("1 task left!");
	});
});
