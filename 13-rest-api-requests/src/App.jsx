import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [hobbies, setHobbies] = useState('');

	const [users, setUsers] = useState([]);

	//  POST
	const postData = () => {
		console.log('Name:' + name, 'Age:' + age, 'Hobbies:' + hobbies);
		axios
			.post('https://64eb7019e51e1e82c5775b76.mockapi.io/users', {
				name: name,
				age: age,
				hobbies: hobbies,
			})
			.then((res) => {
				console.group('res | res.data');
				console.log(res);
				console.log(res.data);
				console.groupEnd();
				// setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//  GET
	const getData = () => {
		axios
			.get('https://64eb7019e51e1e82c5775b76.mockapi.io/users')
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		// GET
		getData();
	}, []);

	// PUT
	const updateData = (id) => {
		console.log('UPDATE' + id);
		axios
			.put(`https://64eb7019e51e1e82c5775b76.mockapi.io/users/${id}`, {
				name: name,
				age: age,
				hobbies: hobbies,
			})
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
				getData();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//  DELETE
	const deleteData = (id) => {
		console.log('DELETE' + id);
		axios
			.delete(`https://64eb7019e51e1e82c5775b76.mockapi.io/users/${id}`, {
				name: name,
				age: age,
				hobbies: hobbies,
			})
			.then((res) => {
				console.log(res.data);
				getData();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<h1>REST API Requests</h1>
			<input
				type="text"
				placeholder="Name"
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Age"
				onChange={(event) => {
					setAge(event.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Hobbies"
				onChange={(event) => {
					setHobbies(event.target.value);
				}}
			/>
			<button onClick={postData}>postData</button>
			<hr />
			<h2>GET</h2>
			{users.map((user) => {
				return (
					<>
						<div key={user.id}>
							<p>
								{user.id}. Name: {user.name}, Age: {user.age},
								Hobbies: {user.hobbies}
							</p>
							<button
								key={user.id}
								onClick={() => updateData(user.id)}>
								UPDATE ID-{user.id}
							</button>
							<button
								key={user.id}
								onClick={() => deleteData(user.id)}>
								DELETE ID-{user.id}
							</button>
							<br />
							<hr />
						</div>
					</>
				);
			})}
		</div>
	);
}

export default App;
