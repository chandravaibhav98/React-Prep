import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const CachedCall = () => {
	// const [data, setData] = useState([]);
	const [data, isLoading] = useQuery('data', () => {
		return fetch(`https://jsonplaceholder.typicode.com/albums`).then(
			(response) => response.json(),
		);
	});

	console.log(data);
	let navigate = useNavigate();

	if (isLoading) return <h1>Loading...</h1>;
	return (
		<div>
			<h2>Cached Call</h2>
			<ul className="navbar">
				<li onClick={() => navigate('/normal-call')}>Normal call</li>
				<li onClick={() => navigate('/cached-call')}>Cached call</li>
				{data?.map((item) => {
					return (
						<div key={item?.id}>
							<h4 key={item?.id}>
								({item?.id}): {item?.title}
							</h4>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default CachedCall;
