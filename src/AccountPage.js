import React, { useState } from 'react';
import AccountPageNavBar from './AccountPageNavBar';
import Footer from './Footer'
import {Container,Row,Col,Jumbotron,Button} from 'reactstrap';
import RenderTableData from './RenderTableData';

//Apollo imports
import { useQuery } from "@apollo/client";
import { FIND_HIVES } from "./graphql-operations";

function AccountPage(props) {
	const [hiveSearchText, setHiveSearchText] = useState("5fc541100dab7243052b2a23");
	const { loading: hivesLoading, data: hivesData } = useQuery(FIND_HIVES, {
		variables: { query: { _owner: hiveSearchText } }
	});
	
	const hives = hivesData ? hivesData.hives : null;
	
	return (
		<div>
			<AccountPageNavBar />
			<Jumbotron color = "dark">
				<Container>
					<Row>
						<Col>
							<h1>My Hives</h1>
							<Button color="dark" onClick={() => setHiveSearchText("5f988ba84e48809d447001e4")}>Get Lastest Update</Button>
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
