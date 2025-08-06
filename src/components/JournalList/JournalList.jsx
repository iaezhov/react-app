import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList({ items }) {
	if (!items || items.length === 0) {
		return <div className='journal-list'><p>Записей пока нет, добавьте первую</p></div>;
	}

	const sortItems = (a, b) => b.date - a.date;

	return (
		<div className='journal-list'>
			{items.sort(sortItems).map(item => (
				<CardButton key={item.id}>
					<JurnalItem
						title={item.title}
						text={item.text}
						date={item.date}
					/>
				</CardButton>
			))}
		</div>
	);
}

export default JournalList;