import { useState, useEffect } from "react";
import Follower from "./Follower";

//note to remember: have the testid in the actual div and not in <Follower/> component. it would fail because there won't be an div with that id

const FollowersList = () => {
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
		fetchFollowers();
	}, []);

	const fetchFollowers = async () => {
		const response = await fetch("https://randomuser.me/api/?results=5");
		const data = await response.json();
		setFollowers(data.results);
	};
	return (
		<div className="mb-8">
			{!!followers?.length &&
				followers.map((follower, index) => (
					<Follower
						key={follower.id.value}
						data={follower}
						index={index}
					/>
				))}
		</div>
	);
};

export default FollowersList;
