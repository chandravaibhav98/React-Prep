import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
		console.log('mapData-' + mappedArray);
	};

	const mapNumbers = () => {
		let mappednumbers = numbers
			.map((filtered) => {
				return filtered * filtered;
			})
			.filter((number) => {
				return number <= 50;
			});

		console.log(mappednumbers);
		setNumbers(mappednumbers);
	};

	const filterData = () => {
		let filteredData = users.filter((user) => {
			return user.id <= 5;
		});
		console.log(filteredData);
		setUsers(filteredData);
	};

	return (
		<div className="App">
			<h1>Numbers</h1>
			<button onClick={mapNumbers}>MapNumbers</button>
			<div className="card">
				<div className="card-inner">
					{numbers.map((number) => (
						<div>{number}</div>
					))}
				</div>
			</div>
			<hr />
			<h1>Users</h1>
			<button onClick={mapData}>MappedData</button>
			<button onClick={filterData}>FilterData</button>
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
		</div>
	);
}

export default App;
