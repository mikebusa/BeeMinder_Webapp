import React from 'react';
import { Button } from 'reactstrap';
import { useRealmApp } from './components/RealmApp'

function SignOutButton(props){
	const app = useRealmApp();
	return (
		<div>
			<Button color="primary" onClick={() => {app.logOut();}}>Sign Out</Button>
		</div>
	);
}
export default SignOutButton;