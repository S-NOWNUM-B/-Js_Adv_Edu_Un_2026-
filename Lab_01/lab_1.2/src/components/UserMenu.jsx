import { useUser } from '../contexts/UserContext';

const UserMenu = () => {
	const { permission, user } = useUser();
	return (
		<div style={{ marginTop: '10px', borderTop: '1px dotted grey' }}>
			<h4>User Settings (Nested Level 3)</h4>
			<p>Email: {user.email}</p>
			<ul>
				<li>Edit: {permission.canEdit ? 'Yes' : 'No'}</li>
				<li>Delete: {permission.canDelete ? 'Yes' : 'No'}</li>
			</ul>
		</div>
	);
};

export default UserMenu;