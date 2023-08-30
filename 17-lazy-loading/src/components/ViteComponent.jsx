import React from 'react';

import viteLogo from '/vite.svg';

const ViteComponent = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<h2>React</h2>
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank"
					rel="noreferrer">
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
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

export default ViteComponent;
