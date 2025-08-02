import './App.css';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JurnalItem from './components/JournalItem/JournalItem';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';

function App() {

	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Сегодня провёл весь день за подготовкой новых материалов.',
			date: new Date()
		},
		{
			title: 'Поход в годы',
			text: 'Думал, что очень много време...',
			date: new Date()
		}
	];
	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CardButton>
						<JurnalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JurnalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
