import React, { useState } from 'react';
import HivePageNavBar from './HivePageNavBar';
import Footer from './Footer'
import { Container,Jumbotron,Table, Button} from 'reactstrap';
//Apollo imports
import { useQuery } from "@apollo/client";
import { FIND_HIVE } from "./graphql-operations";

function HivePage (props) {
	const [hiveSearchText, setHiveSearchText] = useState(props.location.hiveTitle);
	const {data: hiveData } = useQuery(FIND_HIVE, {
		variables: { query: { name: hiveSearchText } }
	});
	const hive = hiveData ? hiveData.hive : null;
	const hiveID = hive ? hive.identifier : "Needs Update";
	const hiveName = hive ? hive.name : null;
	
	const report = hive ? hive.reports[0]  : null;
	
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
	
	const temp_status = (temperature >25 && temperature < 55) ? "Good" :
						(temperature >5 && temperature < 76) ? "Warning" : "Critical";
	const temp_status_color = (temperature >25 && temperature < 55) ? "green" :
							  (temperature >5 && temperature < 76) ? "gold" : "red";
							  
	const humidity_status = (humidity >35 && humidity < 55) ? "Good" :
						    (humidity >25 && humidity < 65) ? "Warning" : "Critical";
	const humidity_status_color = (humidity >35 && humidity < 55) ? "green" :
							      (humidity >25 && humidity < 65) ? "gold" : "red";

>>>>>>> 5593592... Completed Design/Navigation
	const weight_status = (weight >50 && weight < 80) ? "Good" :
						  (weight >40 && weight < 130) ? "Warning" : "Critical";
	const weight_status_color = (weight >50 && weight < 80) ? "green" :
							    (weight >40 && weight < 130) ? "gold" : "red";							
	
	return (
		<div>
			<HivePageNavBar />
			<Jumbotron>
				<h1 className="display-4">{hiveName}</h1>
				<p>Hive ID: {hiveID}</p>
				<hr className="my-2" />
				<h5>Last Updated: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}  </h5>
				<Button color="dark" onClick={() => setHiveSearchText(props.location.hiveTitle)}>Get Lastest Update</Button>
			</Jumbotron>
			<Container>
				<h3>Audio Information:</h3>
				<br />
				<h3>Temperature Sensors:</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Location</th>
							<th>Current Reading</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Inside Hive</th>
							<td>{temperature}°F</td>
							<td style = {{color: temp_status_color}}>{temp_status}</td>
						</tr>
						<tr>
							<th scope="row">Outside Hive</th>
							<td>{temperature}°F</td>
							<td style = {{color: temp_status_color}}>{temp_status}</td>
						</tr>
					</tbody>
				</Table>
				
				<h3>Humidity Sensors:</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Location</th>
							<th>Current Reading</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Inside Hive</th>
							<td>{humidity}%</td>
							<td style = {{color: humidity_status_color}}>{humidity_status}</td>
						</tr>
						<tr>
							<th scope="row">Outside Hive</th>
							<td>{humidity}%</td>
							<td style = {{color: humidity_status_color}}>{humidity_status}</td>
						</tr>
					</tbody>
				</Table>
				
				<h3>Weight Sensors:</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Location</th>
							<th>Current Reading</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Top Left</th>
							<td>{weight} lbs</td>
							<td style = {{color: weight_status_color}}>{weight_status}</td>
						</tr>
						<tr>
							<th scope="row">Top Right</th>
							<td>{weight} lbs</td>
							<td style = {{color: weight_status_color}}>{weight_status}</td>
						</tr>
						<tr>
							<th scope="row">Bottom Left</th>
							<td>{weight} lbs</td>
							<td style = {{color: weight_status_color}}>{weight_status}</td>
						</tr>
						<tr>
							<th scope="row">Bottom Right</th>
							<td>{weight} lbs</td>
							<td style = {{color: weight_status_color}}>{weight_status}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
			<Footer />
		</div>
	);
}

export default HivePage;