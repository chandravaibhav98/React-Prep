import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useJsonPlaceholder from './hooks/useJsonPlaceholder';

function App() {
	// const [users, setUsers] = useState([]);
	// const [posts, setPosts] = useState([]);

	// const getUsers = () => {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then((response) => response.json())
	// 		.then((json) => setUsers(json));
	// };
	// const getPosts = () => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then((response) => response.json())
	// 		.then((json) => setPosts(json));
	// };

	// useEffect(() => {
	// 	getUsers();
	// 	getPosts();
	// });
	let { users, posts } = useJsonPlaceholder();
	return (
		<div className="App">
			<h1>Custom Hooks in React</h1>
			<hr />
			<h2>Users</h2>
			{users.map((user) => {
				return (
					<p key={user.id}>
						user.name-at-{user.id}----{user.name}
					</p>
				);
			})}
			<hr />
			<h2>Posts</h2>
			{posts.map((post) => {
				return (
					<p key={post.id}>
						post.title-at-{post.id}----{post.title}
					</p>
				);
			})}
		</div>
	);
}

export default App;
