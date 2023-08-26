import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const details = [
		{
			id: 1,
			name: 'Name1',
			age: 'age1',
		},
		{
			id: 2,
			name: 'Name2',
			age: 'age2',
		},
		{
			id: 3,
			name: 'Name3',
			age: 'age3',
		},
		{
			id: 4,
			name: 'Name4',
			age: 'age4',
		},
	];

	return (
		<>
			<h1>Keys in React</h1>
			<hr />
			<h2>Numbers</h2>
			<ul>
				{numbers.map((number) => {
					return <li key={number}>{number}</li>;
				})}
			</ul>
			<hr />
			<h2>Details</h2>
			<ul>
				{details.map((detail, index) => {
					return (
						<li key={index}>
							<p>
								Name: {detail.name} \ Age: {detail.age}
								{console.log(
									`ID-${detail.id}-Name: ${detail.name} Age: ${detail.age}`,
								)}
							</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
