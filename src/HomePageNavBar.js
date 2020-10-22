import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link } from "react-router-dom";

const HomePageNavBar = (props) => {
	const {
		className
	} = props;
	const [collapsed, setCollapsed] = useState(true);
	const [modal, setModal] = useState(false);
	const toggleNavbar = () => setCollapsed(!collapsed);
	const toggleModal = () => setModal(!modal);

	return (
		<div>
			<Navbar color="warning" dark>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<NavbarBrand href="/" className="mr-auto">BeeMinder</NavbarBrand>
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<Link to="/MyAccount"><Button color="dark">My Account</Button></Link>
						</NavItem>
						<NavItem>
							<h5> </h5>
						</NavItem>
						<NavItem>
							<Button color="dark" onClick={toggleModal}>+ Add New Hive</Button>
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
											<Input type="text" name="" id="hiveID" placeholder = "Six digit number found in user manual"/>
										</FormGroup>
									</Form>
								</ModalBody>
								<ModalFooter>
									<Button color="primary" onClick={toggleModal}>Create Hive</Button>{' '}
									<Button color="secondary" onClick={toggleModal}>Cancel</Button>
								</ModalFooter>
							</Modal>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default HomePageNavBar;
