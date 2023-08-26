import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function States_FC() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [array, setArray] = useState([
		{
			name: 'Vaibhav',
			age: 24,
		},
		{
			name: 'Shubham',
			age: 27,
		},
	]);
	const [object, setObject] = useState({
		name: 'Vaibhav',
		age: 24,
	});
	// let counter = 0;
	const increment = () => {
		// counter++;
		if (isVisible === false) {
			setIsVisible(!isVisible);
		}
		setCount(count + 1);
		setName('Vaibhav');
		console.log(`Counter Incremented ${count}`);
	};

	return (
		<div className="States">
			<div>
				<h1>States Functional Component</h1>
				{isVisible ? (
					<div>
						<h2>Count:{count}</h2>
					</div>
				) : (
					<div>
						<h2>Not Visible</h2>
					</div>
				)}
				<button onClick={increment}>Set</button>
			</div>
			<div>
				<input
					type="text"
					placeholder="Enter Name"
				/>
				<h3>{name}</h3>
				<button value={name}>setName</button>
			</div>
		</div>
	);
}

export default States_FC;
