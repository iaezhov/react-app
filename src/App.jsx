import './App.css';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import { UserContextProvider } from './context/user.context.jsx';
import { useState } from 'react';

function App() {
	const [items, setItems] = useLocalStorage('journalItems', []);
	const [selectedItem, setSelectedItem] = useState(null);

	const addJournalItem = (item) => {
		if (item.id) {
			setItems(items.map(el => el.id === item.id ? item : el));
			return;
		}

		setItems([
			...items,
			{
				...item,
				id: crypto.randomUUID()
			}
		]);
	};

	const deleteItem = (id) => {
		setItems([...items.filter(item => item.id !== id)]);
		clearSelectedItem();
	};

	const clearSelectedItem = () => {
		setSelectedItem(null);
	};

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton onClick={clearSelectedItem}/>
					<JournalList
						items={items}
						setItem={setSelectedItem}
					/>
				</LeftPanel>
				<Body>
					<JournalForm
						onSubmit={addJournalItem}
						onDelete={deleteItem}
						data={selectedItem}
					/>
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;
