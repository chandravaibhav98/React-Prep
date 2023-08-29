import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import { userData } from './contexts/GlobalContext';
import Settings from './components/Settings';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(Number);

	return (
		<div className="App">
			<h1>Context API</h1>
			<hr />
			<userData.Provider value={{ name, setName, age, setAge }}>
				{/* <Home name={name} /> */}
				<Home />
				<hr />
				{/* <Profile setName={setName} /> */}
				<Profile />
				<hr />
				<Settings />
			</userData.Provider>
		</div>
	);
}

export default App;
