import React from 'react';

const Profile = ({ setName }) => {
	return (
		<div>
			<h2>Profile</h2>
			<input
				type="text"
				onChange={(event) => setName(event.target.value)}
			/>
		</div>
	);
};

export default Profile;
