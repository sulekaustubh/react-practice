import React, { useState } from 'react';

// named export
export function Form() {
	// states for individual details
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('Male');

	// empty array for storing user objects
	const [user, setUser] = useState([]);

	const handleSubmit = () => {
		const newUser = { name: name, age: age, gender: gender };
		setUser([...user, newUser]);
		setName('');
		setAge('');
		setGender('Male');
	};
	console.log(user);
	return (
		<>
			<div>
				<div className="space-y-4 grid">
					<h1 className="text-center text-8xl">React Form</h1>
					<input
						type="text"
						placeholder="Enter your name.."
						onChange={(e) => setName(e.target.value)}
						value={name}
						className="text-black p-1 px-3 rounded-3xl border-4 border-blue-400"
					/>
					<input
						type="text"
						placeholder="Enter your age.."
						onChange={(e) => setAge(e.target.value)}
						value={age}
						className="text-black p-1 px-3 rounded-3xl border-4 border-blue-400"
					/>
					<select
						className="text-black p-1 px-3 rounded-3xl border-4 border-blue-400"
						onChange={(e) => setGender(e.target.value)}
						value={gender}
					>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					<button
						className="p-1 px-3 rounded-3xl border-4 border-green-400"
						onClick={handleSubmit}
					>
						Submit
					</button>
                </div>
                
                {/* only show this div when a user is added */}
                { user[0] && <div className="p-1 py-2 px-3 rounded-3xl border-4 mt-4">
                    {user.map((i, j) => (
                        <div key={j}>
                            <span>{i.name} - </span>
                            <span>{i.age} - </span>
                            <span>{i.gender}</span>
                        </div>
                    ))}
                </div>}
			</div>
		</>
	);
}
