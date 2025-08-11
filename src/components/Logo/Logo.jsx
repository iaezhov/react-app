import { memo } from 'react';
import styles from './Logo.module.css';

function Logo({ image }) {

	return (
		<img
			src={image}
			alt="Логотип"
			className={styles.logo}
		/>
	);
}

export default memo(Logo);