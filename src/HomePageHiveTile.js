import React from 'react';
import { Card, CardText, CardBody, CardHeader,CardTitle, CardFooter, Button} from 'reactstrap';
import {Link } from "react-router-dom";

function HomePageHiveTile(props) {
	
	const hiveID = props.hiveID;
	const hiveName = props.hiveName;

	const report = props.report;
	
	const temperature = report ? report.sensor_data.temp/100.0 : "0";
	const humidity = report ? report.sensor_data.humidity/100.0 : "0";
	const weight = report ? report.sensor_data.weight : "0";
	const bee_flags = report ? report.sensor_data.bee_flags : null;
	
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
			<Card outline color="secondary">
				{report && (temperature > 96 || temperature < 94 || humidity > 65 || humidity < 45 || (bee_flags && (bee_flags.queen_present === 0 || bee_flags.multiple_queen === 1 || bee_flags.possible_mites === 1 || bee_flags.three_day_in_range !== 0 || bee_flags.six_day_in_range !== 0 || bee_flags.nine_day_in_range !== 0))) ? (
					<CardHeader style={{ backgroundColor: '#FF9C9D' }}>
						<h2>
							<CardTitle>{hiveName} ⚠️</CardTitle>
						</h2>
						{lastUpdated === "0000-00-00T00:00:00Z" ? (
							<CardText/>					
						) : (
							<CardText>Last Update: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}</CardText>
						)}
					</CardHeader>
				) : weight > 70 ? (
					<CardHeader style={{ backgroundColor: '#99DCFE' }}>
						<h2>
							<CardTitle>{hiveName}⚠️</CardTitle>
						</h2>
						{lastUpdated === "0000-00-00T00:00:00Z" ? (
							<CardText/>					
						) : (
							<CardText>Last Update: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}</CardText>
						)}
					</CardHeader>
				) : (
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
				)}
				
				{report ? (
					<CardBody>
						<CardText>Hive ID: {hiveID}</CardText>
						{report && (temperature < 94 || temperature > 96) ? (<CardText style={{"color":"red"}}>Temperature: {temperature}°F</CardText>) : (<CardText>Temperature: {temperature}°F</CardText>)}
						{report && (humidity < 45 || humidity > 65) ? (<CardText style={{"color":"red"}}>Humidity: {humidity}%</CardText>) : (<CardText>Humidity: {humidity}%</CardText>)}
						{report && (weight > 70) ? (<CardText style={{"color":"red"}}>Weight: {weight} lbs</CardText>) : (<CardText>Weight: {weight} lbs</CardText>)}
					</CardBody>
				) : (
					<CardBody>
						<CardText>No data to report.</CardText>
						<CardText>Update page to see most recent data.</CardText>
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
