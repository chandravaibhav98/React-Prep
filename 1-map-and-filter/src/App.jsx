import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setUsers(json);
			});
		return () => {
			<p>Success</p>;
		};
	}, []);

	const mapData = () => {
		let mappedArray = users.map((user) => user.id * 2);
		console.log(mappedArray);
	};

	const filterData = () => {
		let filteredData = users.filter((user) => {
			return user.id <= 10;
		});
		console.log(filteredData);
	};

	return (
		<div className="App">
			<h1>Users</h1>
			<div className="card">
				{users.map((user) => (
					<div
						className="card-inner"
						key={user.id}>
						<p>
							name-{user.name} username-{user.username}
						</p>
					</div>
				))}
			</div>
			<button onClick={mapData}>MappedData</button>
			<button onClick={filterData}>FilterData</button>
		</div>
	);
}

export default App;
