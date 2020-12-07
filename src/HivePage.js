import React, { useState } from 'react';
import HivePageNavBar from './HivePageNavBar';
import Footer from './Footer'
import { Container,Jumbotron,Table, Button} from 'reactstrap';
import EditHiveModal from './EditHiveModal';
import DeleteHiveModal from './DeleteHiveModal';
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
	
	const temp_status = (temperature >= 94  && temperature <= 96) ? "Good" :
						(temperature == 0) ? "Critical" : "Warning";
	const temp_status_color = (temperature >= 94 && temperature <= 96) ? "green" :
							  (temperature == 0) ? "red" : "gold";
							  
	const humidity_status = (humidity >= 45 && humidity <= 65) ? "Good" :
						    (humidity == 0) ? "Critical" : "Warning";
	const humidity_status_color = (humidity >= 45 && humidity <= 65) ? "green" :
							      (humidity == 0) ? "red" : "gold";

	const weight_status = (weight < 70) ? "Good" :
						  (weight == 0) ? "Critical" : "Ready to Harvest!";
	const weight_status_color = (weight >50 && weight < 80) ? "green" :
							    (weight >40 && weight < 130) ? "blue" : "red";	

	const refresh = () => {
		setHiveSearchText(props.location.hiveTitle);
		window.location.reload(false);
	}
	
	return (
		<div>
			<HivePageNavBar />
			<Jumbotron>
				<h1 className="display-4">{hiveName}</h1>
				<p>Hive ID: {hiveID}</p>
				<hr className="my-2" />
				<h5>Last Updated: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}  </h5>
				<Button color="dark" onClick={() => refresh()}>Get Lastest Update</Button>			
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
							<td scope="row">Inside Hive</td>
							<td>{temperature}°F</td>
							<td style = {{color: temp_status_color}}>{temp_status}</td>
						</tr>
						<tr>
							<td scope="row">Outside Hive</td>
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
							<td scope="row">Inside Hive</td>
							<td>{humidity}%</td>
							<td style = {{color: humidity_status_color}}>{humidity_status}</td>
						</tr>
						<tr>
							<td scope="row">Outside Hive</td>
							<td>{humidity}%</td>
							<td style = {{color: humidity_status_color}}>{humidity_status}</td>
						</tr>
					</tbody>
				</Table>
				
				<h3>Weight Sensors:</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Time</th>
							<th>Current Reading</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td scope="row">{hour}:{minute}:{second} {AMPM}</td>
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