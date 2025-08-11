import { useContext, useMemo } from 'react';
import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JournalItem';
import styles from './JournalList.module.css';
import { UserContext } from '../../context/user.context';

const sortItems = (a, b) => b.date - a.date;

function JournalList({ items, setItem }) {
	const { userId } = useContext(UserContext);
	const filteredItems = useMemo(() => (items || [])
		.filter(item => item.userId === userId)
		.sort(sortItems), [items, userId]);

	if (!filteredItems || filteredItems.length === 0) {
		return <div className={styles['journal-list']}>
			<p>Записей пока нет, добавьте первую</p>
		</div>;
	}

	return (
		<div className={styles['journal-list']}>
			{filteredItems.map(item => (
				<CardButton
					key={item.id}
					onClick={() => setItem(item)}
				>
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