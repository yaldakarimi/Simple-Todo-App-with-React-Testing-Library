import React from "react";

const Follower = ({ index, data }) => {
	return (
		<div
			data-testid={`follower-${index}`}
			className="bg-gray-50  w-full text-gray-800 mb-2 p-4 rounded-md shadow-sm"
		>
			<div className="flex">
				<img
					className="mr-4 rounded-full"
					src={data.picture.thumbnail}
					alt={data.name.first}
				/>
				<div>
					<h4>
						{data.name.first} {data.name.last}
					</h4>
					<span className="text-blue-300">{data.email}</span>
				</div>
			</div>
		</div>
	);
};

export default Follower;
