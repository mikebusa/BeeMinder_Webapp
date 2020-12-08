import React, { useState } from 'react'
import { CardDeck, CardBody, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useRealmApp } from "./components/RealmApp";
import HomePageHiveTile from "./HomePageHiveTile";
import NewHiveForm from "./NewHiveForm";
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
        return hives ? (hives && hives.map(({ name, identifier, reports }) => {
            return (
                <HomePageHiveTile hiveName = {name} hiveID = {identifier} report = {reports[reports.length-1]} />
            )
        })) : <p style={{"color":"red", "fontSize":20}}>No Hives to Show. Use the "+ New Hive" Button to add a hive.</p>
    }
	
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

    return (
        <div>
			<CardDeck>
				{renderBody()}
				<CardBody>
					<br/>
					<br/>
					<br/>
					<br/>
					<Button color = "success" onClick={() => toggle()}>+ New Hive</Button>
					<Modal isOpen={modal} toggle={toggle} className={props.className}>
						<ModalHeader toggle={toggle} close={<button className="close" onClick={toggle}>&times;</button>}>Add a New Hive</ModalHeader>
						<ModalBody>
							<NewHiveForm/>
						</ModalBody>
					</Modal>
				</CardBody>
			</CardDeck>
        </div>
    )
}
export default RenderTileData;
