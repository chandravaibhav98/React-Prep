import { useState } from 'react';
import './App.css';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';

function App() {
	return (
		<div className="App">
			<h1>Uncontrolled Components VS Controlled Components</h1>
			<hr/>
            <Uncontrolled />
			<hr />
			<Controlled />
		</div>
	);
}

export default App;
