import React from "react";

export default function PageHeader({ title }) {
	return (
		<div>
			<h1
				data-testid="title"
				className="text-2xl font-bold border-b-2 mb-5 pb-2"
			>
				{title}
			</h1>
		</div>
	);
}
