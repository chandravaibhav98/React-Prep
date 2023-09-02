import React from 'react';
import './App.css';
import PromiseExample1 from './PromiseExample1';
import PromiseExample2 from './PromiseExample2';
import AsyncAwait from './AsyncAwaitExample1';

const App = () => {
	return (
		<div>
			<h1>Promises and Async/ Await</h1>
			<hr />
			<PromiseExample1 />
			<hr />
			<PromiseExample2 />
			<hr />
			<AsyncAwait />
		</div>
	);
};

export default App;
