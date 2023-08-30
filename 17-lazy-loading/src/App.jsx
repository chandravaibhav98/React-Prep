import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Loader from './components/Loader';
// import Lorem from './components/Lorem';
// import ReactComponent from './components/ReactComponent';
// import ViteComponent from './components/ViteComponent';

const ReactComponent = lazy(() => import('./components/ReactComponent'));
const ViteComponent = lazy(() => import('./components/ViteComponent'));
const Lorem = lazy(() => import('./components/Lorem'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<h1>Lazy Loading</h1>
				<hr />
				<ViteComponent />
				<hr />
				<ReactComponent />
				<hr />
				<Lorem />
			</Suspense>
		</div>
	);
}

export default App;
