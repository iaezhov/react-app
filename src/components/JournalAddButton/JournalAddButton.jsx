import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';
import iconPlus from '../../assets/icon-plus.svg';

function JournalAddButton() {
	return (
		<CardButton className={styles['journal-add']}>
			<img src={iconPlus} alt="add" />
			Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;