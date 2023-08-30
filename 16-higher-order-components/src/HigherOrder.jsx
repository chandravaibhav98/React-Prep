import { useState, useEffect } from 'react';

export default function HigherOrder(title, Component, request) {
	return function HOC() {
		const [data, setData] = useState([]);
		const getData = async () => {
			let users = await fetch(
				`https://jsonplaceholder.typicode.com/${request}`,
			)
				.then((response) => {
					return response;
				})
				.catch((error) => {
					return error;
				});

			setData(await users.json());
		};

		useEffect(() => {
			getData();
		}, []);
		return (
			<div>
				<h2>Higher Order Component - {title}</h2>
				<Component data={data} />
			</div>
		);
	};
}
