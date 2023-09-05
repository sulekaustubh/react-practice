import React, { useEffect, useState } from 'react';

function StopWatch() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [running, setRunning] = useState(false);

	var time;
	useEffect(() => {
		if (running) {
			time = setInterval(() => {
				setSeconds(seconds + 1);
			}, 1000);
        }
        
		// find out why we need a cleanup
		return () => clearInterval(time);
	});

	return (
		<div>
			<div>
				<h1>Stopwatch</h1>
				<button onClick={() => setRunning(!running)}>Start</button>
			</div>
			<p>{seconds}</p>
		</div>
	);
}

export default StopWatch;
