import React, { useState } from 'react';
import { Card, CardText, CardBody, CardHeader,CardTitle, CardFooter, Button} from 'reactstrap';
import {Link } from "react-router-dom";
//Apollo imports
import { useQuery } from "@apollo/client";
import { FIND_HIVE } from "./graphql-operations";

function HomePageHiveTile(props) {
	const [hiveSearchText, setHiveSearchText] = useState(props.hiveTitle);
	const { data: hiveData } = useQuery(FIND_HIVE, {
		variables: { query: { name: hiveSearchText } }
	});
	const hive = hiveData ? hiveData.hive : null;
	const hiveID = hive ? hive.identifier : "Needs Update";
	const hiveName = hive ? hive.name : null;

	const report = hive ? hive.reports[0] : null;
	
	const temperature = report ? report.sensor_data.temp : "0";
	const humidity = report ? report.sensor_data.humidity : "0";
	const weight = report ? report.sensor_data.weight : "0";
	
	const lastUpdated = report ? report.time_recorded : "0000-00-00T00:00:00Z";
	const month = lastUpdated.substr(5, 2);
	const day = lastUpdated.substr(8, 2);
	const year = lastUpdated.substr(0, 2);
	const hour = Number(lastUpdated.substr(11, 2)) === 0 ? "12":
				 Number(lastUpdated.substr(11, 2)) > 12 ? String(Number(lastUpdated.substr(11, 2))-12) : lastUpdated.substr(11, 2);
	const AMPM = Number(lastUpdated.substr(11, 2)) > 12 ? "PM" : "AM";
	const minute = lastUpdated.substr(14, 2);
	const second = lastUpdated.substr(17, 2);
	
	return (
		<div>
			<Card>
				<CardHeader>
					<h2>
						<CardTitle>{hiveName}</CardTitle>
					</h2>
					<CardText>Last Hive Update: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}</CardText>
				</CardHeader>
				<CardBody>
					<CardText>Hive ID: {hiveID}</CardText>
					<CardText>Temperature: {temperature}°F</CardText>
					<CardText>Humidity: {humidity}%</CardText>
					<CardText>Weight: {weight} lbs</CardText>
				</CardBody>
				<CardFooter>
					<Button color="primary" onClick={() => setHiveSearchText(props.hiveTitle)}>Get Hive Update</Button>  <Link to={{pathname: '/MyHive', hiveTitle:hiveName}}><Button color="success">Go To Hive</Button></Link>																								
				</CardFooter>
			</Card>
		</div>
	);
}

export default HomePageHiveTile;
