import { useState } from 'react';
import './App.css';
import Users from './assets/components/Users';
import Posts from './assets/components/Posts';

function App() {
	return (
		<div className="App">
			<h1>Higher Order Components</h1>
			<hr />
			<Users />
			<hr />
			<Posts />
		</div>
	);
}

export default App;
