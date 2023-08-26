import './App.css';

function App() {
	const addNums = (num1, num2) => {
		console.log(num1 + num2);
	};

	const getInput = (event) => {
		console.log(event.target.value);
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="addNums"
				onChange={getInput}
				name="input"
			/>
			<button onClick={() => addNums(2, 3)}>addNums</button>
		</div>
	);
}

export default App;
