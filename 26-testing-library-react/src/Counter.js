import { useState } from 'react';
import './App.css';

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<h2>React</h2>
			<div>
				<a
					href="https://react.dev"
					target="_blank"
					rel="noreferrer">
					<img
						src="./../public/logo192.png"
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count
				</button>
				<p data-testid="count">{count}</p>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default Counter;
