import { useState } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';



function App() {
	const [name, setName] = useState('');
	return (
		<div className="App">
			<h1>Context API</h1>
			<hr />
			<Home name={name} />
			<hr />
			<Profile setName={setName} />
		</div>
	);
}

export default App;
