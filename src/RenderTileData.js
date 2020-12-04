import React, { useState } from 'react'
import { Card, CardDeck } from 'reactstrap';
import { useRealmApp } from "./components/RealmApp";
import HomePageHiveTile from "./HomePageHiveTile";
//Apollo Imports
import { useQuery } from "@apollo/client";
import { FIND_HIVES } from "./graphql-operations";


function RenderTileData (props) {
	const app = useRealmApp();
	const userID = app.currentUser._id
	
    const [hiveSearchText, setHiveSearchText] = useState(userID);
	const { loading: hivesLoading, data: hivesData } = useQuery(FIND_HIVES, {
		variables: { query: { _owner: hiveSearchText } }
	});
	
	const hives = hivesData ? hivesData.hives : null;

    const renderBody = () => {
        return hives && hives.map(({ name, identifier, reports }) => {
            return (
                <HomePageHiveTile hiveName = {name} hiveID = {identifier} report = {reports[0]} />
            )
        })
    }

    return (
        <div>
            <CardDeck>
				{renderBody()}
            </CardDeck>
        </div>
    )
}
export default RenderTileData;
