import './App.css';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import { UserContext } from './context/user.context.js';


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
		<UserContext.Provider value={{ userId: 1 }}>
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
		</UserContext.Provider>
	);
}

export default App;
