import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockedFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};
describe("FollowersList", () => {
	it("should render fetched items", async () => {
		render(<MockedFollowersList />);
		const followerElm = await screen.findByTestId("follower-0");
		expect(followerElm).toBeInTheDocument();
	});

	it("should render all fetched items", async () => {
		render(<MockedFollowersList />);
		const followerElms = await screen.findAllByTestId(/follower/i);
		expect(followerElms.length).toBe(5);
	});
});
