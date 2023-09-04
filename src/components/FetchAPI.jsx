import React, { useEffect, useState } from 'react';

function FetchAPI() {
	const url = 'https://jsonplaceholder.typicode.com/users/1';
	const [info, setInfo] = useState({});

	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setInfo(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return <div>{info.name}</div>;
}

export default FetchAPI;
