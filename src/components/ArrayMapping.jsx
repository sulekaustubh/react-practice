import React from 'react';

function ArrayMapping() {
	const users = [
		{ name: 'Jon Snow', id: 1 },
		{ name: 'Tony Stark', id: 2 },
		{ name: 'Steve Rogers', id: 3 },
	];

	return (
		<>
			<div className="space-y-8">
				{/* NOTE: do not use {} inside .map functions when rendering JSX */}
				{users.map((i) => (
					<p key={i.id}> {i.name} </p>
				))}
			</div>
		</>
	);
}

export default ArrayMapping;
