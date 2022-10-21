import { useState, useEffect } from "react";
import axios from "axios";
import Follower from "./Follower";

const FollowersList = () => {
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
		fetchFollowers();
	}, []);

	const fetchFollowers = async () => {
		const { data } = await axios.get(
			"https://randomuser.me/api/?results=5"
		);
		setFollowers(data.results);
	};
	return (
		<div className="mb-8">
			{!!followers?.length &&
				followers.map((follower) => (
					<Follower key={follower.id.value} data={follower} />
				))}
		</div>
	);
};

export default FollowersList;
