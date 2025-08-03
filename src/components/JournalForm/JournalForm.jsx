import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm({ onSubmit }) {
	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		onSubmit(data);
	};
	return (
		<form className='journal-form' onSubmit={submit}>
			<input type='text' name="title" />
			<input type='date' name="date" />
			<input type='text' name="tag" />
			<textarea name="text" id="" cols="30" rows="30" />
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;