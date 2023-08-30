import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const ReactComponent = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<h2>React</h2>
			<div>
				<a
					href="https://react.dev"
					target="_blank"
					rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
};

export default ReactComponent;
