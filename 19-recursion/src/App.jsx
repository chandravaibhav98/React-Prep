import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Family from './components/family';
import { familytree } from './components/data';

function App() {
	return (
		<>
			<h1>Recursion</h1>
			<Family familytree={familytree} />
		</>
	);
}

export default App;
