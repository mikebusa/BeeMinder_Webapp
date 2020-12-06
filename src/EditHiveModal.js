import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//Apollo Imports
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_HIVE } from "./graphql-operations";
import EditHiveForm from "./EditHiveForm";


function EditHiveModal (props) {
	//Modal Controls
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button outline color="warning" onClick={toggle}>Edit Hive</Button>{' '}
			<Modal isOpen={modal} toggle={toggle} className={props.className}>
				<ModalHeader toggle={toggle} close={<button className="close" onClick={toggle}>&times;</button>}>Edit Hive Name</ModalHeader>
				<ModalBody>
					<EditHiveForm hiveName = {props.hiveName}/>
				</ModalBody>
			</Modal>
		</div>
	);
}

export default EditHiveModal;