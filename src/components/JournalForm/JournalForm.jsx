import { useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './JournalForm.module.css';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function formatDate(timestamp) {
	if (!timestamp) {
		return '';
	}
	return new Date(+timestamp).toISOString().split('T')[0];
}

function JournalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFromReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	const onChange = (event) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [event.target.name]: event.target.value }
		});
	};

	const focusError = ({ title, date, text }) => {
		switch(true) {
		case !title:
			titleRef.current.focus();
			break;
		case !date:
			dateRef.current.focus();
			break;
		case !text:
			textRef.current.focus();
			break;
		default: return;
		}
	};

	const submit = (event) => {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFromReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFromReadyToSubmit, values, onSubmit]);

	return (
		<form className={styles['journal-form']} onSubmit={submit}>
			<div>
				<Input
					ref={titleRef}
					appearence="title"
					type='text'
					name="title"
					value={values.title}
					isValid={isValid.title}
					onChange={onChange}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-lable']}>
					<img src="/calendar.svg" alt="Иконка календаря" />
					<span>Дата</span>
				</label>
				<Input
					ref={dateRef}
					id="date"
					type='date'
					name="date"
					value={formatDate(values.date)}
					isValid={isValid.date}
					onChange={onChange}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-lable']}>
					<img src="/folder.svg" alt="Иконка папки" />
					<span>Метки</span>
				</label>
				<Input
					id="tag"
					type='text'
					name="tag"
					value={values.tag}
					onChange={onChange}
				/>
			</div>
			<textarea
				ref={textRef}
				name="text"
				id=""
				cols="30"
				rows="30"
				value={values.text}
				className={cn(styles.input, { [styles.invalid]: !isValid.text })}
				onChange={onChange}
			/>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;