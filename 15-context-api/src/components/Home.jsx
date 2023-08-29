import React from 'react';
import { useContext } from 'react';
import { userData } from '../contexts/GlobalContext';

const Home = () => {
	let { name } = useContext(userData);
	return (
		<div>
			<h2>Home</h2>
			<h3>Name is {name}</h3>
		</div>
	);
};

export default Home;
