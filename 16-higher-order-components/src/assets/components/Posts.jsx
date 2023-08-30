import React from 'react';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		let posts = await fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return error;
			});
		setPosts(await posts.json());
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<h2>Posts</h2>
			{posts.slice(0, 10).map((post) => {
				return <p>Title :{post.title}</p>;
			})}
		</div>
	);
};

export default Posts;
