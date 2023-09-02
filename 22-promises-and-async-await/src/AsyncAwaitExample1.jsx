import React from 'react';

const AsyncAwaitExample1 = () => {
	const examplePromise1 = (paramOne) => {
		return new Promise((resolve, reject) => {
			if (paramOne === 'Promise-async/await') {
				console.log(paramOne);
				resolve('examplePromise1: Promise Resolved');
			} else {
				reject('examplePromise1: Promise Rejected');
			}
		});
	};

	const examplePromise2 = (paramTwo) => {
		return new Promise((resolve, reject) => {
			if (paramTwo === 'examplePromise1: Promise Resolved') {
				resolve('examplePromise2: Promise-OK');
			} else {
				reject('examplePromise2: Promise-still OK');
			}
		});
	};

	const examplePromiseMain = async () => {
		try {
			let res1 = await examplePromise1('Promise-async/await');
			console.log(res1);
			let res2 = await examplePromise2(res1);
			console.log(res2);
		} catch (error) {
			console.log(error);
		}
	};

	function executePromise() {
		examplePromiseMain();
	}
	return (
		<div>
			<h2>Async/Await Example1</h2>
			<button onClick={executePromise}>Promise-async/await</button>
		</div>
	);
};

export default AsyncAwaitExample1;
