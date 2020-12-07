import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//Apollo Imports
import { useMutation } from "@apollo/client";
import { DELETE_HIVE } from "./graphql-operations";


function DeleteHiveModal (props) {
	const {
		className,
		hiveName
	} = props;
		
	
	//Delete Hive logic
	const [deleteHive, { loading: deletingHive }] = useMutation(DELETE_HIVE);
	const [deleteHiveNameText, setDeleteHiveNameText] = React.useState(hiveName);
	const deleteOldHive = async () => {
		if (!deleteHiveNameText) return;
		await deleteHive({
			variables: {
				query: {
					name: deleteHiveNameText
				}
			}
		})
		window.location.reload(false);
	}
	
	//Modal Controls
	const [modal, setModal] = useState(false);
	
	//Cancel Button
	const toggle = () => setModal(!modal);
	
	//Steps to delete the hive
	const executeDelete = () => {
		setModal(!modal);
		setDeleteHiveNameText(hiveName);
		deleteOldHive();
	}

	return (
		<div>
			<Button color="danger" onClick={toggle}>Delete Hive</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Delete Hive?</ModalHeader>
				<ModalBody>
					Are you sure you want to delete this hive?		
				</ModalBody>
				<ModalFooter>
					<Button color="danger" onClick={() => executeDelete()}>Delete</Button>{' '}
					<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default DeleteHiveModal;