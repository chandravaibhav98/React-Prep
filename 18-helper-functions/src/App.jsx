import React, { useEffect } from 'react';
import Footer from './Footer';
import { getUsers } from './helpers/getAllUsers';
import { addTwoNums, multiplyTwoNums } from './helpers/calculate';

const App = () => {
	const getUsersHelper = async () => {
		let data = await getUsers('posts');
		console.log(data);
	};

	const addTwoNumsHelper = async () => {
		let x = 1;
		let y = 1;

		let sum = await addTwoNums(x, y);
		let multiples = multiplyTwoNums(x, y);
		console.log(sum, multiples);
	};

	useEffect(() => {
		getUsersHelper();
	}, []);

	return (
		<div className="App">
			<h1>Helper Functions</h1>
			<button onClick={addTwoNumsHelper}>addTwoNums</button>
			<Footer />
		</div>
	);
};
export default App;
