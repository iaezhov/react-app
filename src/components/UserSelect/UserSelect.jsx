// import styles from './UserSelect.module.css';

function UserSelect({ changedUser }) {
	const changeUser = (event) => {
		changedUser(event.target.value);
	};
	return (
		<select name="user" id="user" onChange={changeUser}>
			<option value="1">Антон</option>
			<option value="2">Вася</option>
		</select>
	);
}

export default UserSelect;