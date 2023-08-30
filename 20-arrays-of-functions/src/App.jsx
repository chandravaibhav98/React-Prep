import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const fnArray = [
		{
			fn: function add(a, b) {
				return a + b;
			},
		},
		{
			fn: function subtract(a, b) {
				return a - b;
			},
		},
		{
			fn: function multiply(a, b) {
				return a * b;
			},
		},
		{
			fn: function divide(a, b) {
				return a / b;
			},
		},
	];

	const mainFn = () => {
		let result = fnArray.map((fn) => {
			return fn.fn(2, 3);
		});
		console.log(result);
	};

	useEffect(() => {
		mainFn();
	}, []);

	return (
		<div className="App">
			<h1>
				Write a function which takes an array of multiple functions and
				executes them from left to right
			</h1>
		</div>
	);
}

export default App;
