import { useState } from 'react';
import ReactQuill from 'react-quill';
import './App.css';
import 'react-quill/dist/quill.snow.css';

function App() {
	let innerElement1 = `<p style="font-size:20px;color:yellowgreen">innerHTML element</p>`;
	let innerElement2 = `<p style="font-size:20px;color:orange">innerHTML element</p>`;

	const [quillData, setQuillData] = useState('');
	const getQuillData = (data) => {
		setQuillData(data);
		console.log(quillData);
	};

	return (
		<div className="App">
			<h1>innerHTML in React</h1>
			<div dangerouslySetInnerHTML={{ __html: innerElement1 }}></div>
			<div dangerouslySetInnerHTML={{ __html: innerElement2 }}></div>
			<p style={{ fontSize: 20, color: 'violet' }}>innerHTML element</p>
			<hr />
			<h3>react-quill</h3>
			<ReactQuill onChange={getQuillData} />
		</div>
	);
}

export default App;
