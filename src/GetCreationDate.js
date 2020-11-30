import React from 'react';

function GetCreationDate(props) {
	const hive = props.hive;
	const created = hive ? hive.created : "0000-00-00T00:00:00Z";
	const month = created.substr(5, 2);
	const day = created.substr(8, 2);
	const year = created.substr(0, 2);
	
	return (
		<p>{month}/{day}/{year}</p>
	);
}

export default GetCreationDate;