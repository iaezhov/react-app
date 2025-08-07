import './App.css';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import { UserContextProvider } from './context/user.context.jsx';

function App() {
	const [items, setItems] = useLocalStorage('journalItems', []);

	const addJournalItem = (item) => {
		setItems([
			...items,
			{
				...item,
				id: crypto.randomUUID()
			}
		]);
	};

	return (
		<UserContextProvider>
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
		</UserContextProvider>
	);
}

export default App;
