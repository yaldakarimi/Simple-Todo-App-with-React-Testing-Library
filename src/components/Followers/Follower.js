import React from "react";

const Follower = ({ data: { name, picture, email } }) => {
	return (
		<div className="bg-gray-50  w-full text-gray-800 mb-2 p-4 rounded-md shadow-sm">
			<div className="flex">
				<img
					className="mr-4 rounded-full"
					src={picture.thumbnail}
					alt={name.first}
				/>
				<div>
					<h4>
						{name.first} {name.last}
					</h4>
					<span className="text-blue-300">{email}</span>
				</div>
			</div>
		</div>
	);
};

export default Follower;
