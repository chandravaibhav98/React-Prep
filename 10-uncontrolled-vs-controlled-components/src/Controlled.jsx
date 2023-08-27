import React, { createRef } from 'react';

export default function Controlled() {
	let name = createRef();
	let age = createRef();

	const getName = (event) => {
		console.log(event.target.value);
	};
	const getAge = (event) => {
		console.log(event.target.value);
	};

	const submit = () => {
		console.log(name.current.value, age.current.value);
	};

	return (
		<div>
			<h2>Controlled</h2>
			<input
				type="text"
				placeholder="Name"
				ref={name}
				onChange={getName}
			/>

			<input
				type="text"
				placeholder="Age"
				ref={age}
				onChange={getAge}
			/>
			<button onClick={submit}>Submit</button>
		</div>
	);
}
