import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
	const [inputData, setInputData] = useState('');
	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};
	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};
	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name="title" />
			<input type='date' name="date" />
			<input type='text' name="tag" />
			<input value={inputData} type='text' onChange={inputChange} />
			<textarea name="post" id="" cols="30" rows="30" />
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;