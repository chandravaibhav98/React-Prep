import React, { useState, createRef } from 'react';

export default function Uncontrolled() {
	let name = createRef();
	let age = createRef();

	const submit = () => {
		console.log(name.current.value, age.current.value);
	};

	return (
		<div>
			<h2>Uncontrolled</h2>
			<input
				type="text"
				placeholder="Name"
				ref={name}
			/>

			<input
				type="text"
				placeholder="Age"
				ref={age}
			/>
			<button onClick={submit}>Submit</button>
		</div>
	);
}
