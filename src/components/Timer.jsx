import React, { useState, useEffect } from 'react';

function Timer() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [running, setRunning] = useState(false);

	var time;
	useEffect(() => {
		if (running) {
			time = setInterval(() => {
				setSeconds(seconds - 1);
				if (seconds <= 1 && minutes == 0) {
					setRunning(false);
				} else if (seconds < 1 && minutes > 0) {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}, 1000);
		}

		return () => clearInterval(time);
	});

	return (
		<div>
			<div>
				<h1>Timer</h1>
				<div>
					<input
						type="number"
						placeholder="minutes"
						onChange={(e) => setMinutes(e.target.value)}
						// value={seconds}
						className="text-black"
					/>
					<input
						type="number"
						placeholder="seconds"
						onChange={(e) => setSeconds(e.target.value)}
						// value={seconds}
						className="text-black"
					/>
				</div>
				<div className="grid grid-flow-col">
					<button onClick={() => setRunning(!running)}>
						{running ? 'Pause' : 'Start'}
					</button>
					{/* <button
						className="text-rose-400"
						onClick={() => Reset()}
					>
						Reset
					</button> */}
				</div>
				<p className="text-9xl border-4 px-4 pb-4 rounded-3xl tracking-widest duration-300 text-blue-500 font-semibold">
					{minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</p>
			</div>
		</div>
	);
}

export default Timer;
