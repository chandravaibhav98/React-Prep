import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import NormalCall from './NormalCall';
import CachedCall from './CachedCall';

function App() {
	let queryClient = QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<h1>Normal Call and Cached Call</h1>
				<Routes>
					<Route
						path="/normal-call"
						element={<NormalCall />}
					/>
					<Route
						path="/cached-call"
						element={<CachedCall />}
					/>
				</Routes>
			</div>
		</QueryClientProvider>
	);
}

export default App;
