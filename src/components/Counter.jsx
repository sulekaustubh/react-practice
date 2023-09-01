import React, { useState, useEffect } from 'react';

function Counter() {
    
    // grab the value of count from localStorage
    const initialCount = parseInt(localStorage.getItem('count') || 0);
	const [count, setCount] = useState(initialCount);

    // run everytime the value of count is changed
    // update count stored in the localstorage with the new value
    // used .toString because the localStorage can only store string values
    useEffect(() => {
		localStorage.setItem('count', count.toString());
	}, [count]);

	return (
		<div className="space-y-8">
			<div>Counter</div>
			<div> {count} </div>
			<div className="space-x-16">
				<button onClick={() => setCount(count + 1)}>+</button>
				<button onClick={() => setCount(count - 1)}>-</button>
            </div>
		</div>
	);
}

export default Counter;
