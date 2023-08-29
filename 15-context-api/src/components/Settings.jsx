import React from 'react';
import { useContext } from 'react';
import { userData } from '../contexts/GlobalContext';

const Settings = () => {
	let { name } = useContext(userData);
	let { age } = useContext(userData);
	return (
		<div>
			<h2>Settings</h2>
			<h6>
				Name: {name} Age: {age}
			</h6>
		</div>
	);
};

export default Settings;
