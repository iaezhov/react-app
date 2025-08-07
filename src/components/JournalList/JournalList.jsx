import { useContext } from 'react';
import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JournalItem';
import './JournalList.css';
import { UserContext } from '../../context/user.context';

function JournalList({ items }) {
	const { userId } = useContext(UserContext);

	if (!items || items.length === 0) {
		return <div className='journal-list'><p>Записей пока нет, добавьте первую</p></div>;
	}

	const sortItems = (a, b) => b.date - a.date;

	return (
		<div className='journal-list'>
			{items
				.filter(item => item.userId === userId)
				.sort(sortItems)
				.map(item => (
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