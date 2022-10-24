import { render, screen } from "@testing-library/react";
import PageHeader from "../PageHeader";

it("should render the same text as the passed prop", () => {
	render(<PageHeader title={"test title"} />);
	const titleElm = screen.getByText(/test title/i);
	expect(titleElm).toBeInTheDocument();
});

it("should render the same text as the passed prop2", () => {
	render(<PageHeader title="cats" />);
	const titleTextElm = screen.getByRole("heading", { name: "cats" });
	expect(titleTextElm).toBeInTheDocument();
});
//notes:
// we can test the lack of existence of sth using queryBy methods and expecting a falsy to be returned (null or [])

it("should render the same text as the passed prop3", () => {
	render(<PageHeader title="cats" />);
	const titleTextElm = screen.queryByRole("paragraph");
	expect(titleTextElm).toBeFalsy();
});

it("should render the same text as the passed prop4", () => {
	render(<PageHeader title="cats" />);
	const titleTextElm = screen.getByTestId("title");
	expect(titleTextElm).toBeInTheDocument();
});

//findBy method should always be in an async fn and should have await operator

it("should render the same text as the passed prop5", async () => {
	render(<PageHeader title="cats" />);
	const titleTextElm = await screen.findByText("cats");
	expect(titleTextElm).toBeInTheDocument();
});

it("should not render more than one title", async () => {
	render(<PageHeader title="test prop" />);
	const titleElms = await screen.findAllByRole("heading");
	expect(titleElms.length).not.toBeGreaterThan(1);
});
