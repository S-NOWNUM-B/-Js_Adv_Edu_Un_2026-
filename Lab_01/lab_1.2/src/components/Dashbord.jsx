import { useUser } from '../contexts/UserContext';
import Header from './Header';

const Dashbord = () => {
	const { user } = useUser();
	return (
		<div style={{ padding: '20px', border: '1px solid black' }}>
			<h1>Dashbord</h1>
			<p>Welcome, <strong>{user.name}</strong></p>
			<Header />
		</div>
	);
};

export default Dashbord;