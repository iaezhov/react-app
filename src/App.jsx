import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JurnalItem from './components/JurnalItem/JurnalItem';

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
		<>
			<h1>Заголовок</h1>
			<p>Проект</p>
			<Button />
			<CardButton>Новое воспоминнание</CardButton>
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
		</>
	);
}

export default App;
