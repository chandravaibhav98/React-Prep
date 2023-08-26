import { useState } from 'react';
import './App.css';

const styles = {
	internalLight: {
		color: 'black',
		backgroundColor: 'yellowgreen',
	},
	internalDark: {
		color: 'black',
		backgroundColor: 'grey',
	},
	external: {
		color: 'black',
		backgroundColor: 'yellowgreen',
	},
	inline: {
		color: 'black',
		backgroundColor: 'yellowgreen',
	},
	light: {
		color: 'black',
		backgroundColor: 'white',
	},
	dark: {
		color: 'white',
		backgroundColor: 'black',
	},
};

function App() {
	const [theme, setTheme] = useState(false);

	const toggletheme = () => {
		setTheme(!theme);
	};

	return (
		<div
			className="App"
			style={theme ? styles.light : styles.dark}>
			<h1>CSS Styling in React</h1>
			<hr />
			<h4 className={theme ? 'external' : 'externalDark'}>
				External Styling
			</h4>
			<h4 style={theme ? styles.internalLight : styles.internalDark}>
				Internal Styling
			</h4>
			<h4
				style={
					theme
						? { color: 'black', backgroundColor: 'yellowgreen' }
						: { color: 'black', backgroundColor: 'grey' }
				}>
				Inline Styling
			</h4>
			<button onClick={toggletheme}>Toggle Theme</button>
		</div>
	);
}

export default App;
