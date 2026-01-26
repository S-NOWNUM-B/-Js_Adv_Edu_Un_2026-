import { useUser } from '../contexts/UserContext';
import UserMenu from './UserMenu';

const Header = () => {
	const { user, theme, toggleTheme } = useUser();
	return (
		<header style={{ background: theme.darkMode ? '#333' : '#f5f5f5', color: theme.darkMode ? '#f5f5f5' : '#333', padding: '10px' }}>
			<h3>Header - Role: {user.role}</h3>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<UserMenu />
		</header>
	);
};

export default Header;