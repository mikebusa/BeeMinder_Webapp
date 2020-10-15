import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewHiveModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <div>
		<Button color="dark" onClick={toggleModal}>Add New Hive</Button>
		<Modal isOpen={modal} toggleModal={toggleModal} className={className}>
			<ModalHeader toggleModal={toggleModal}>Add A New Hive</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup>
						<Label for="username">Username</Label>
						<Input type="username" name="username" id="username"/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input type="password" name="" id="password"/>
					</FormGroup>
					<FormGroup>
						<Label for="hivename">New Hive Name</Label>
						<Input type="hivename" name="" id="hivename"/>
					</FormGroup>
					<FormGroup>
						<Label for="hiveID">Hive ID Number</Label>
						<Input type="text" name="" id="hiveID" placeholder = "Six digit number found in the manual"/>
					</FormGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggleModal}>Create Hive</Button>{' '}
				<Button color="secondary" onClick={toggleModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
    </div>
  );
}

export default NewHiveModal;