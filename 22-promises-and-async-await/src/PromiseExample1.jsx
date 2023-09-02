import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function PromiseExample1() {
	let isChocolateEveryday = true;
	const examplePromise1 = () => {
		const friend = new Promise((resolve, reject) => {
			// let isChocolateEveryday = true;
			if (isChocolateEveryday) {
				resolve(`examplePromise1: Promise Resolved`);
			} else {
				reject('examplePromise1: Promise Rejected');
			}
		});
		friend
			.then((response) => console.log(`Status: ${response}`))
			.catch((err) =>
				console.log(
					`examplePromise1: isChocolateEveryday : ${isChocolateEveryday} \n ${err} No Further`,
				),
			);
	};

	function Toggle() {
		isChocolateEveryday = !isChocolateEveryday;
		console.log(
			`examplePromise1: isChocolateEveryday : ${isChocolateEveryday}`,
		);
		examplePromise1();
	}

	// useEffect(() => {
	// 	promiseExample();
	// }, []);

	return (
		<div className="App">
			<h2>Promise Example1</h2>
			<button onClick={Toggle}>Toggle</button>
		</div>
	);
}

export default PromiseExample1;
