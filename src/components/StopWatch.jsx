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
				if (seconds == 59) {
					setMinutes(minutes + 1);
					setSeconds(0);
				}
			}, 1000);
		}

		// cleanup the timer on component unmount
		return () => clearInterval(time);
	});

	const Reset = () => {
		setSeconds(0);
		setMinutes(0);
	};

	return (
			<div className="space-y-4 w-[500px] text-center">
				<h1 className="text-center">Stopwatch</h1>

				<p className="text-9xl border-4 px-4 pb-4 rounded-3xl tracking-widest duration-300 text-blue-500 font-semibold">
					{minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</p>
				<div className='grid grid-flow-col' >
					<button onClick={() => setRunning(!running)}>
						{running ? 'Pause' : 'Start'}
					</button>
					<button className='text-rose-400' onClick={() => Reset()}>Reset</button>
				</div>
			</div>
	);
}

export default StopWatch;
