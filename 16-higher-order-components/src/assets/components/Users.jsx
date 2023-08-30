import React, { useState, useEffect } from 'react';
import HigherOrder from '../../HigherOrder';

const Users = ({ data }) => {
	return (
		<div>
			<h2>Users</h2>
			{data.slice(0, 10).map((user) => {
				return <p key={user.id}>Name :{user.name}</p>;
			})}
		</div>
	);
};

const UserComp = HigherOrder('Users', Users,'users');

export default UserComp;
