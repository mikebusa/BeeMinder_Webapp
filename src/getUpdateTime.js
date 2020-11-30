import React from 'react';

function GetUpdateTime(props) {
	const report = props.report;
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
		<p>{month}/{day}/{year} at {hour}:{minute}:{second} {AMPM}</p>
	);
}

export default GetUpdateTime;