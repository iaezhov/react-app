// import styles from './UserSelect.module.css';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context.js';

function UserSelect() {
	const { userId, setUserId } = useContext(UserContext);
	const changeUser = (event) => {
		setUserId(+event.target.value);
	};
	return (
		<select name="user" id="user" value={userId} onChange={changeUser}>
			<option value="1">Антон</option>
			<option value="2">Вася</option>
		</select>
	);
}

export default UserSelect;