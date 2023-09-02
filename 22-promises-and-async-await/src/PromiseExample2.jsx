import React from 'react';

const PromiseExample2 = () => {
	const examplePromise1 = (paramOne) => {
		return new Promise((resolve, reject) => {
			if (paramOne === 'Promise') {
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

	const examplePromiseMain = () => {
		examplePromise1('Promise')
			.then((response) => {
				console.log(response);
				return examplePromise2(response);
			})
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	};

	function executePromise() {
		examplePromiseMain();
	}
	return (
		<div>
			<h2>Promise Example2</h2>
			<button onClick={executePromise}>Promise</button>
		</div>
	);
};

export default PromiseExample2;
