import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {Link } from "react-router-dom";
import NewHiveForm from './NewHiveForm'

const HomePageNavBar = (props) => {
	const {
    className
	} = props;
	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);
	
	const [NewHiveModal, setNewHiveModal] = useState(false);
	const toggleNewHiveModal = () => setNewHiveModal(!NewHiveModal);
	const closeBtn = <button className="close" onClick={toggleNewHiveModal}>&times;</button>;

	const [SignOutModal, setSignOutModal] = useState(false);
	const toggleSignOutModal = () => setSignOutModal(!SignOutModal);

	return (
		<div>
			<Navbar color="warning" dark>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<NavbarBrand href="/" className="mr-auto">BeeMinder</NavbarBrand>
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<Button color="dark" onClick={toggleNewHiveModal}>+ New Hive</Button>
							<Modal isOpen={NewHiveModal} toggleNewHiveModal={toggleNewHiveModal} className={className}>
								<ModalHeader toggleNewHiveModal={toggleNewHiveModal} close={closeBtn}>Add a New Hive</ModalHeader>
								<ModalBody>
									<NewHiveForm />
								</ModalBody>
							</Modal>
						</NavItem>
						<NavItem>
							<h5> </h5>
						</NavItem>
						<NavItem>
							<Link to="/MyAccount"><Button color="dark">My Hives</Button></Link>
						</NavItem>
						<NavItem>
							<h5> </h5>
						</NavItem>
						<NavItem>
							<Button color="dark" onClick={toggleSignOutModal}>Sign Out</Button>
							<Modal isOpen={SignOutModal} toggleSignOutModal={toggleSignOutModal} className={className}>
								<ModalHeader toggleSignOutModal={toggleSignOutModal}>Sign Out</ModalHeader>
								<ModalBody>
									<p>Are you sure you want to sign out?</p>
								</ModalBody>
								<ModalFooter>
									<Button color="primary" onClick={toggleSignOutModal}>Sign Out</Button>{' '}
									<Button color="secondary" onClick={toggleSignOutModal}>Cancel</Button>
								</ModalFooter>
							</Modal>
						</NavItem>
						<NavItem>
							<h5> </h5>
						</NavItem>
						<NavItem>
							<Link to="/GQLExamples"><Button color="dark">GQL Example</Button></Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default HomePageNavBar;
