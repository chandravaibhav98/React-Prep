import { useState } from 'react';

function App() {
	const [inputs, setInputs] = useState({});

	const getInputValues = (data) => {
		console.group('ID', data.target.id);
		console.log(data.target.name, data.target.value);

		let { name, value } = data.target;
		console.log('var', name, value);

		let input = { [name]: value };
		console.log('var-input', input);

		setInputs({ ...inputs, ...input });
		console.log('var-inputs', inputs);
		console.groupEnd();
	};
	const addGroup = () => {
		console.log('var-inputs', inputs);
	};

	return (
		<div className="App">
			<h1>Dynamic Inputs</h1>
			<div className="card">
				<form>
					<input
						type="text"
						placeholder="Name"
						name="name"
						id="name"
						onChange={getInputValues}
					/>
					<input
						type="text"
						placeholder="Age"
						name="age"
						id="age"
						onChange={getInputValues}
					/>
					<input
						type="text"
						placeholder="Years of Experience"
						name="YOE"
						id="YOE"
						onChange={getInputValues}
					/>
					<button onSubmit={addGroup}>addGroup</button>
				</form>
			</div>
		</div>
	);
}

export default App;
