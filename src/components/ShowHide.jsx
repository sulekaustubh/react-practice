import React, { useState } from 'react';

function ShowHide() {
	const [hidden, setHidden] = useState(false);

	return (
        <div className="space-y-12">
            {/* conditional rendering */}
			{!hidden && (
				<div className="border-2 rounded-2xl p-4">
					Turn me Invisible
				</div>
			)}
			<button onClick={() => setHidden(!hidden)}>
				{hidden ? 'Show' : 'Hide'}{' '}
			</button>
		</div>
	);
}

export default ShowHide;
