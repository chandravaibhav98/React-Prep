import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchFilter, setSearchFilter] = useState([]);

	const getData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setUsers(json);
			});
	};

	useEffect(() => {
		getData();
	});

	useEffect(() => {
		const searched = setTimeout(() => {
			if (searchQuery) {
				setSearchFilter(
					users.filter((user) => {
						return Object.values(user)
							.join('')
							.toLowerCase()
							.includes(searchQuery.toLowerCase());
					}),
				);
			} else {
				setUsers(users);
			}
			return () => clearInterval(searched);
		}, 50);
	}, [searchQuery]);

	return (
		<div className="App">
			<h1>Search Filter</h1>

			<input
				className="search"
				type="text"
				placeholder="Search"
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<hr />
			<div className="grid-main">
				{searchQuery.length > 0
					? searchFilter.map((search) => {
							return (
								<div
									className="grid-child"
									key={search.id}>
									<h2>{search.name}</h2>
									<p>{search.username}</p>
								</div>
							);
					  })
					: users.map((user) => {
							return (
								<div
									className="grid-child"
									key={user.id}>
									<h2>Name-{user.name}</h2>
									<p>UserName-{user.username}</p>
								</div>
							);
					  })}
			</div>
		</div>
	);
}

export default App;
