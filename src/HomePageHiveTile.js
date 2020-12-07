import React from 'react';
import { Alert, Card, CardText, CardBody, CardHeader,CardTitle, CardFooter, Button} from 'reactstrap';
import {Link } from "react-router-dom";

function HomePageHiveTile(props) {
	
	const hiveID = props.hiveID;
	const hiveName = props.hiveName;

	const report = props.report;
	
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
			{report && (temperature > 96 || temperature < 94 || humidity > 65 || humidity < 45 || weight > 70) ? (
				<Alert color="danger">THIS HIVE REQUIRES ATTENTION!</Alert>
			):(<p/>)}
			<Card outline color="secondary">
				<CardHeader>
					<h2>
						<CardTitle>{hiveName}</CardTitle>
					</h2>
					{lastUpdated === "0000-00-00T00:00:00Z" ? (
						<CardText/>					
					) : (
						<CardText>Last Update: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}</CardText>
					)}
				</CardHeader>
				
				{report ? (
					<CardBody>
						<CardText>Hive ID: {hiveID}</CardText>
						<CardText>Temperature: {temperature}°F</CardText>
						<CardText>Humidity: {humidity}%</CardText>
						<CardText>Weight: {weight} lbs</CardText>
					</CardBody>
				) : (
					<CardBody>
						<CardText>No data to report, update page to see most recent data</CardText>
					</CardBody>
				)}	
				<CardFooter>
					<Button color="primary" onClick={() => window.location.reload(false)}>Get Hive Update</Button>  <Link to={{pathname: '/MyHive', hiveTitle:hiveName}}><Button color="success">Go To Hive</Button></Link>																								
				</CardFooter>
			</Card>
			<br/>
		</div>
	);
}

export default HomePageHiveTile;
