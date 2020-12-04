import React, { useState } from 'react';
import AccountPageNavBar from './AccountPageNavBar';
import Footer from './Footer'
import {Container,Row,Col,Jumbotron,Button} from 'reactstrap';
import RenderTableData from './RenderTableData';
import { useRealmApp } from "./components/RealmApp";
//Apollo imports
import { useQuery } from "@apollo/client";
import { FIND_HIVES } from "./graphql-operations";

function AccountPage(props) {
	const app = useRealmApp();
	const userID = app.currentUser._id
	
	const [hiveSearchText, setHiveSearchText] = useState(userID);
	const { loading: hivesLoading, data: hivesData } = useQuery(FIND_HIVES, {
		variables: { query: { _owner: hiveSearchText } }
	});
	
	const hives = hivesData ? hivesData.hives : null;
	
	const refresh = () => {
		setHiveSearchText(userID);
		window.location.reload(false);
	}
	
	return (
		<div>
			<AccountPageNavBar />
			<Jumbotron color = "dark">
				<Container>
					<Row>
						<Col>
							<h1>My Hives</h1>
							<Button color="dark" onClick={() => refresh()}>Get Lastest Update</Button>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
			<RenderTableData hives = {hives} />
			<Footer />
        </div>
	);
}

export default AccountPage;
