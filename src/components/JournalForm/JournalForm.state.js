export const INITIAL_STATE = {
	isValid: {
		text: true,
		title: true,
		date: true
	},
	values: {
		text: '',
		title: '',
		date: '',
		tag: ''
	},
	isFromReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {
	case 'SET_VALUE':
		return {
			...state,
			values: {
				...state.values,
				...(action.payload.date ? { ...action.payload, date: new Date(action.payload.date).getTime() } : action.payload)
			}
		};
	case 'CLEAR':
		return { ...INITIAL_STATE };
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid };
	case 'SUBMIT': {
		const titleValidity = Boolean(state.values.title?.trim());
		const textValidity = Boolean(state.values.text?.trim());
		const dateValidity = Boolean(state.values.date);
		return {
			...state,
			isValid: {
				title: titleValidity,
				text: textValidity,
				date: dateValidity
			},
			isFromReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}
	}
}