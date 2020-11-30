import React, { useState } from 'react';
import AccountPageNavBar from './AccountPageNavBar';
import Footer from './Footer'
import DeleteHiveModal from './DeleteHiveModal';
import GetUpdateTime from './getUpdateTime'
import GetCreationDate from './GetCreationDate'
import {Container,Row,Col,Jumbotron,Table,Button} from 'reactstrap';
import {Link } from "react-router-dom";
//Apollo imports
import { useQuery } from "@apollo/client";
import { FIND_HIVES } from "./graphql-operations";

function AccountPage(props) {
	const [hiveSearchText, setHiveSearchText] = useState("5f988ba84e48809d447001e4");
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
			<Table hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Hive Name</th>
						<th>Last Updated</th>
						<th>Date Added</th>
						<th>Current Status</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{hives && !hivesLoading && (
						<tr>
							<th scope="row">1</th>
							<td><Link to={{
									pathname: '/MyHive', 
									hiveProps:{
										hiveTitle:hives[0].name
									}
								}}>{hives[0].name}</Link>
							</td>
							<td><GetUpdateTime report = {hives[0].reports[0]}/></td>
							<td><GetCreationDate hive = {hives[0]}/></td>
							<td  style={{ color: 'green' }}>Good</td>
							<td><DeleteHiveModal /></td>
						</tr>
					)}
					{hives && !hivesLoading && (
						<tr>
							<th scope="row">2</th>
							<td><Link to={{
									pathname: '/MyHive', 
									hiveTitle:hives[1].name
								}}>{hives[1].name}</Link>
							</td>
							<td><GetUpdateTime report = {hives[1].reports[0]}/></td>
							<td><GetCreationDate hive = {hives[1]}/></td>
							<td  style={{ color: 'green' }}>Good</td>
							<td><DeleteHiveModal /></td>
						</tr>
					)}
					{hives && !hivesLoading && (
						<tr>
							<th scope="row">3</th>
							<td><Link to={{
									pathname: '/MyHive', 
									hiveTitle:hives[2].name
								}}>{hives[2].name}</Link>
							</td>
							<td><GetUpdateTime report = {hives[2].reports[0]}/></td>
							<td><GetCreationDate hive = {hives[2]}/></td>
							<td  style={{ color: 'green' }}>Good</td>
							<td><DeleteHiveModal /></td>
						</tr>
					)}
				</tbody>
			</Table>
			<Footer />
		</div>
	);
}

export default AccountPage;