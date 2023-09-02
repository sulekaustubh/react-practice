import React, { useState } from 'react';

function DisableButton() {
	const [text, setText] = useState('');
	return (
		<>
			<div className='flex space-y-4 flex-col'>
				<input
					type="text"
					onChange={(e) => setText(e.target.value)}
					value={text}
					placeholder="Write something.."
					className="text-black w-auto p-2 rounded-2xl border-4 border-blue-400"
				/>
				<button disabled={!text}>Submit</button>
			</div>
		</>
	);
}

export default DisableButton;
