import styles from './Header.module.css';
import UserSelect from '../UserSelect/UserSelect';

function Header() {
	return (
		<>
			<img
				src="/logo.svg"
				alt="Логотип"
				className={styles.logo}
			/>
			<UserSelect />
		</>
	);
}

export default Header;