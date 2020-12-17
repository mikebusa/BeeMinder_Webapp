import React, { useState } from 'react';
import HivePageNavBar from './HivePageNavBar';
import Footer from './Footer'
import { Container,Jumbotron,Table} from 'reactstrap';
import GraphModal from './GraphModal';
import RenderFlagData from './RenderFlagData';
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
	
	const report = hive ? hive.reports[hive.reports.length-1] : null;
	
	const temperature = report ? report.sensor_data.temp/100.0 : "0";
	const humidity = report ? report.sensor_data.humidity/100.0 : "0";
	const weight = report ? report.sensor_data.weight : "0";
	const bee_flags = report ? report.sensor_data.bee_flags : null;
	const queen = bee_flags ? bee_flags.queen_present : null;
	const mqueens = bee_flags ? bee_flags.multiple_queen : null;
	const mites = bee_flags ? bee_flags.possible_mites : null;
	const tdr = bee_flags ? bee_flags.three_day_in_range : null;
	const sdr = bee_flags ? bee_flags.six_day_in_range : null;
	const ndr = bee_flags ? bee_flags.nine_day_in_range : null;
	
	const fft_data = report ? report.sensor_data.fft_data : null;
	const len = fft_data ? fft_data.length : 0;
	
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
						(temperature === 0) ? "Critical" : "Warning";	
	const temp_row_color = (temperature >= 94 && temperature <= 96) ? "white" :
						   (temperature === 0) ? "#FF9C9D" : "#FF9C9D";
							  
	const humidity_status = (humidity >= 45 && humidity <= 65) ? "Good" :
						    (humidity === 0) ? "Critical" : "Warning";
	const humidity_row_color = (humidity >= 45 && humidity <= 65) ? "white" :
						   (humidity === 0) ? "#FF9C9D" : "#FF9C9D";

	const weight_status = (weight < 70) ? "Good" :
						  (weight === 0) ? "Critical" : "Ready to Harvest!";
	const weight_row_color = (weight < 70) ? "white" :
						   (weight === 0) ? "#FF9C9D" : "#99DCFE";

	return (
		<div>
			<HivePageNavBar />
			<Jumbotron>
				<h1 className="display-4">{hiveName}</h1>
				<p>Hive ID: {hiveID}</p>
				<hr className="my-2" />
				<h5>Last Updated: {month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}  </h5>		
			</Jumbotron>
			<Container>
				<h3>Audio Inferences:</h3>
				{!bee_flags ? (
					<p style={{"color":"red"}}>Audio Information not collected from the hive. Refresh to try again.</p>
				) : queen === 1 && mqueens === 0 && mites === 0 && tdr === 0 && sdr === 0 && ndr === 0 ? (
					<p style={{"color":"green"}}>Based on the audio recording, the hive is healthy!</p>
				) : (
					<RenderFlagData flags = {bee_flags}/>
				)}
				<h3>Temperature Sensors:</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Time</th>
							<th>Current Reading</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr style = {{backgroundColor: temp_row_color}}>
							<td>{hour}:{minute}:{second} {AMPM}</td>
							<td>{temperature}°F</td>
							<td>{temp_status}</td>
						</tr>
					</tbody>
				</Table>
				
				<h3>Humidity Sensors:</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Time</th>
							<th>Current Reading</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr style = {{backgroundColor: humidity_row_color}}>
							<td>{hour}:{minute}:{second} {AMPM}</td>
							<td>{humidity}%</td>
							<td>{humidity_status}</td>
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
						<tr style = {{backgroundColor: weight_row_color}}>
							<td>{hour}:{minute}:{second} {AMPM}</td>
							<td>{weight} lbs</td>
							<td>{weight_status}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
			<Footer />
		</div>
	);
}

export default HivePage;