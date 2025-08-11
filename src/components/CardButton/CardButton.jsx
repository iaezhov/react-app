import styles from './CardButton.module.css';
import cn from 'classnames';

function CardButton({ children, className, ...props }) {
	const classes = cn(styles['card-button'], className);
	return (
		<button
			className={classes}
			{...props}
		>{children}</button>
	);
}

export default CardButton;