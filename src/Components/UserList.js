import React, { useContext } from 'react';
import { AppContext } from '../context';
import User2 from './User2';

const UserList = () => {
	const { users } = useContext(AppContext);
	return (
		<div>
			<h3>Available Users</h3>
			{users.map(user => <User2 key={user.id} user={user} />)}
		</div>
	);
};

export default UserList;