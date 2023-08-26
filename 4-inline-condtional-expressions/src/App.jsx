import { useState, useEffect } from 'react';
import './App.css';

function App() {
	let age = 24;
	let name = 'Name';

	// useEffect(() => {
	// 	if (age > 20) {
	// 		console.log(`Age:${age}>20`);
	// 	} else if (name === 'Name' && age === 24) {
	// 		console.log(`${age} , ${name}`);
	// 	} else {
	// 		console.group(`Your name is not ${name}`);
	// 		console.log('Please enter correct details');
	// 		console.groupEnd();
	//     }
	// }, []);

	return (
		<div className="App">
			<h1>Inline Conditional Statements</h1>
			<hr />
			<h2>Name: {name}</h2>
			<h2>Age: {age}</h2>
			<hr />
			{age > 20 ? (
				<div>
					<h3>
						{name}-Age:{age} is greater than 20
					</h3>
				</div>
			) : name === 'Name' || age === 24 ? (
				<div>
					<h3>Found Name / Age</h3>
					<h4>
						{age} , {name}
					</h4>
				</div>
			) : (
				<>
					<h3>Please enter correct details</h3>
					<h4>
						Your name is not {name} and Age:{age} is invalid
					</h4>
				</>
			)}
		</div>
	);
}

export default App;
