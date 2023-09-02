import { useState, useEffect } from 'react';

const NormalCall = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums`)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				setLoading(false);
			});
	}, []);

	if (loading) return <h1>Loading...</h1>;
	return (
		<div>
			<h2>Normal Call</h2>
			<div>
				{data?.map((item) => {
					return (
						<div key={item?.id}>
							<h4 key={item?.id}>
								({item?.id}): {item?.title}
							</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NormalCall;
