import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [objData, setObjData] = useState({});

	const getInputs = (value, name) => {
		let data = { [name]: value };
		setObjData({ ...objData, ...data });

		console.group(
			`getInputs()\n ${name}: ${value}`,
			'\nData-',
			data,
			'\nsetObjData-',
			objData,
		);
		console.groupEnd();
	};
	const submit = (event) => {
		event.preventDefault();
		console.log(objData);
	};

	return (
		<div className="App">
			<div className="form">
				<form onSubmit={submit}>
					<input
						type="text"
						placeholder="Name"
						name="name"
						onChange={() =>
							getInputs(event.target.value, event.target.name)
						}
					/>
					<input
						type="number"
						placeholder="Age"
						name="age"
						onChange={() =>
							getInputs(event.target.value, event.target.name)
						}
					/>
					<input
						type="text"
						placeholder="Hobbies"
						name="hobbies"
						onChange={() =>
							getInputs(event.target.value, event.target.name)
						}
					/>
					<input
						type="date"
						placeholder="DOB"
						name="dob"
						onChange={() =>
							getInputs(event.target.value, event.target.name)
						}
					/>
					<button type="submit">form Submit</button>
					<button type="reset">form Reset</button>
				</form>
				<button onClick={submit}>onClick Submit</button>
			</div>
		</div>
	);
}

export default App;
