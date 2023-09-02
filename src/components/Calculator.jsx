import React, { useState, useEffect } from 'react';

function Calculator() {
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [result, setResult] = useState('0');

	// this code block will only be executed when the value of num1 or num2 changes
	useEffect(() => {
		console.log('I am useEffect');
	}, [num1, num2]);

	return (
		<>
			<div>
				<div className="flex flex-col space-y-8">
					<input
						type="number"
						onChange={(e) => setNum1(parseFloat(e.target.value))}
						value={num1}
						placeholder="Enter a number"
						className="text-black rounded-2xl border-4 p-2 border-blue-400"
					/>
					<input
						type="number"
						onChange={(e) => setNum2(parseFloat(e.target.value))}
						value={num2}
						placeholder="Enter a number"
						className="text-black rounded-2xl border-4 p-2 border-blue-400"
					/>
					<div className="space-x-12">
						<button onClick={() => setResult(num1 + num2)}>
							Add
						</button>
						<button onClick={() => setResult(num1 - num2)}>
							Subtract
						</button>
						<button onClick={() => setResult(num1 * num2)}>
							Multiply
						</button>
						<button onClick={() => setResult(num1 / num2)}>
							Divide
						</button>
					</div>
				</div>
				<p className="mt-6"> Result: {parseFloat(result).toFixed(2)}</p>
			</div>
		</>
	);
}

export default Calculator;
