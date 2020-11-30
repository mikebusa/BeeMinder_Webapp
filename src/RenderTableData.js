import React, { useState } from 'react'
import { Table } from 'reactstrap';
import DeleteHiveModal from './DeleteHiveModal';
import GetCreationDate from './GetCreationDate';
import GetUpdateTime from './getUpdateTime';
import {Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FIND_HIVES } from "./graphql-operations";

function RenderTableData (props) {
    const [hiveSearchText, setHiveSearchText] = useState("5fc541100dab7243052b2a23");
	const { loading: hivesLoading, data: hivesData } = useQuery(FIND_HIVES, {
		variables: { query: { _owner: hiveSearchText } }
	});
	
	const hives = hivesData ? hivesData.hives : null;

    const renderHeader = () => {
        let headerElement = ['Hive Name', 'Last Updated', 'Date Added', 'Status', '']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return hives && hives.map(({ name, reports, created }) => {
            return (
                <tr key={name}>
                    <td><Link to={{
						pathname: '/MyHive', 
						hiveTitle:name
					}}>{name}</Link>
					</td>
					<td><GetUpdateTime report = {reports[0]}/></td>
					<td><GetCreationDate date = {created}/></td>
					<td  style={{ color: 'green' }}>Good</td>
					<td><DeleteHiveModal hiveName = {name}/></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <Table hover>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </Table>
        </div>
    )
}
export default RenderTableData;
