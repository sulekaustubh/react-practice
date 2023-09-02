import React, { useState } from 'react';

function AddTask() {
	const [task, setTask] = useState('');
	const [arr, setArr] = useState([]);

	const handleClick = () => {
		setArr([...arr, task]);
		setTask('');
	};

	return (
		<>
			<div>
				<input
					onChange={(e) => setTask(e.target.value)}
					value={task}
					type="text"
					placeholder="Add tasks.."
					className="text-black"
				/>
				<button
					className="border-2"
					onClick={handleClick}
				>
					ADD TASK
				</button>
				<div>
					{arr.map((i) => (
						<p key={i}>{i}</p>
					))}
				</div>
			</div>
		</>
	);
}

export default AddTask;
