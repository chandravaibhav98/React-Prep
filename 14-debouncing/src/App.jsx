import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const pinAPI = `https://api.postalpincode.in/pincode/`;

function App() {
	const [pin, setPin] = useState('');

	const searchPin = (value) => {
		axios
			.get(pinAPI + value)
			.then((response) => {
				if (response.data[0].Status === 'Success') {
					console.group('Found! Status : ' + response.data[0].Status);
					console.info(response.data[0]);
					console.info(response.data[0].PostOffice);
					console.groupEnd();
				} else {
					console.info(response.data[0]);
				}
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	//  Debouncing (using useEffect)
	useEffect(() => {
		const debouncePin = setTimeout(() => {
			axios
				.get(pinAPI + pin)
				.then((response) => {
					if (response.data[0].Status === 'Success') {
						console.group(
							'Found! Status : ' + response.data[0].Status,
						);
						console.info(response.data[0]);
						console.info(response.data[0].PostOffice);
						console.groupEnd();
					} else {
						console.info(response.data[0]);
					}
				})
				.catch((error) => {
					console.warn(error);
				});
		}, 2000);
		return () => {
			clearTimeout(debouncePin);
		};
	}, [pin]);

	return (
		<div className="App">
			<h1>Debouncing</h1>
			<h2>Enter Pincode</h2>
			<input
				type="text"
				placeholder="searchPin"
				onChange={(event) => searchPin(event.target.value)}
			/>
			<input
				type="text"
				placeholder="debouncePin"
				onChange={(event) => setPin(event.target.value)}
			/>
		</div>
	);
}

export default App;
