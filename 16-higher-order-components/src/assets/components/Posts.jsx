import React, { useState, useEffect } from 'react';
import HigherOrder from '../../HigherOrder';

const Posts = ({ data }) => {
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
			{data.slice(0, 10).map((user) => {
				return <p key={user.id}>Title :{user.title}</p>;
			})}
		</div>
	);
};

const PostsComp = HigherOrder('Posts', Posts, 'posts');

export default PostsComp;
