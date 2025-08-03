import './App.css';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [{
	id: crypto.randomUUID(),
	title: 'Подготовка к обновлению курсов',
	text: 'Сегодня провёл весь день за подготовкой новых материалов.',
	date: new Date()
},
{
	id: crypto.randomUUID(),
	title: 'Поход в годы',
	text: 'Думал, что очень много време...',
	date: new Date()
}];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addJournalItem = (item) => {
		setItems(prevItems => [
			...prevItems,
			{
				id: crypto.randomUUID(),
				title: item.title,
				text: item.post,
				date: new Date(item.date)
			}
		]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items}/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addJournalItem} />
			</Body>
		</div>
	);
}

export default App;
