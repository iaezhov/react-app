import { useState } from 'react';
import cn from 'classnames';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';

function JournalForm({ onSubmit }) {
	const [formValidateState, setFormValidateState] = useState({
		title: true,
		text: true,
		date: true
	});
	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		let isValid = true;
		if (!data.title?.trim()) {
			setFormValidateState(prevState => ({ ...prevState, title: false }));
			isValid = false;
		} else {
			setFormValidateState(prevState => ({ ...prevState, title: true }));
		}
		if (!data.text?.trim()) {
			setFormValidateState(prevState => ({ ...prevState, text: false }));
			isValid = false;
		} else {
			setFormValidateState(prevState => ({ ...prevState, text: true }));
		}
		if (!data.date) {
			setFormValidateState(prevState => ({ ...prevState, date: false }));
			isValid = false;
		} else {
			setFormValidateState(prevState => ({ ...prevState, date: true }));
		}
		if (!isValid) {
			console.log('Форма не валидна');
			return;
		}
		onSubmit(data);
	};
	return (
		<form className={styles['journal-form']} onSubmit={submit}>
			<div>
				<input
					type='text'
					name="title"
					className={cn(styles['input-title'], { [styles.invalid]: !formValidateState.title })}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-lable']}>
					<img src="/calendar.svg" alt="Иконка календаря" />
					<span>Дата</span>
				</label>
				<input
					id="date"
					type='text'
					name="date"
					className={cn(styles.input, { [styles.invalid]: !formValidateState.date })}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-lable']}>
					<img src="/folder.svg" alt="Иконка папки" />
					<span>Метки</span>
				</label>
				<input
					id="tag"
					type='text'
					name="tag"
					className={cn(styles.input)}
				/>
			</div>
			<textarea
				name="text"
				id=""
				cols="30"
				rows="30"
				className={cn(styles.input, { [styles.invalid]: !formValidateState.text })}
			/>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;