import React from 'react';

const Users = () => {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		let users = await fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return error;
			});

		setUsers(await users.json());
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div>
			<h2>Users</h2>
			{users.slice(0, 10).map((user) => {
				return <p>Name :{user.name}</p>;
			})}
		</div>
	);
};

export default Users;
