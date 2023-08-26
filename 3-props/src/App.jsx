import { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
	const [name, setName] = useState('Vaibhav');
	const changeName = (value) => {
		setName(value);
		console.log(`${value}`);
	};
	return (
		<div className="App">
			<h1>Props</h1>
			<button onClick={() => setName('setName from App')}>setName</button>
			<ChildComponent
				name={name}
				changeName={changeName}
			/>
		</div>
	);
}

export default App;
