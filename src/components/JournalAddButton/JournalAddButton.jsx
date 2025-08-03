import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';
import iconPlus from '../../assets/icon-plus.svg';

function JournalAddButton() {
	return (
		<CardButton className="journal-add">
			<img src={iconPlus} alt="add" />
			Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;