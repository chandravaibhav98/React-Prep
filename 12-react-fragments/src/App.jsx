import { Fragment } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>React Fragments</h1>
			<Fragment>
				<h2>Fragment using React.Fragment</h2>
			</Fragment>
			<>
				<h2>Fragment using empty tag</h2>
			</>
		</>
	);
}

export default App;
