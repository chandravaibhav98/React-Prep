import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	function click() {
		//  Dynamic Import
		import('./Math').then((math) => {
			let sum = math.add(5, 6);
			console.log(sum);
		});
	}
	return (
		<div className="App">
			<h1>Code-Splitting and Dynamic Imports</h1>
			<button onClick={click}>Click</button>
		</div>
	);
}

export default App;
