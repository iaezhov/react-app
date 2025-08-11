import UserSelect from '../UserSelect/UserSelect';
import Logo from '../Logo/Logo';
import { useCallback, useState } from 'react';
import Button from '../Button/Button';

const LOGOS = ['/logo.svg', '/vite.svg'];

function Header() {
	const [logoIdx, setLogoIdx] = useState(0);
	
	const toggleLogo = useCallback(() => {
		setLogoIdx(prev => Number(!prev));
	}, []);

	return (
		<>
			<Logo image={LOGOS[logoIdx]} />
			<UserSelect />
			<Button onClick={toggleLogo}>Изменить лого</Button>
		</>
	);
}

export default Header;