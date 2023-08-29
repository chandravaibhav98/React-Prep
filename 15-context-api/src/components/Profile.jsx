import React from 'react';
import { useContext } from 'react';
import { userData } from '../contexts/GlobalContext';

const Profile = () => {
	let { setName } = useContext(userData);
	let { setAge } = useContext(userData);
	return (
		<div>
			<h2>Profile</h2>
			<input
				type="text"
				placeholder="Name"
				onChange={(event) => setName(event.target.value)}
			/>
			<input
				type="text"
				placeholder="Age"
				onChange={(event) => setAge(event.target.value)}
			/>
		</div>
	);
};

export default Profile;
