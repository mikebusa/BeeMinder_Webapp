import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {Link } from "react-router-dom";
import NewHiveForm from './NewHiveForm'

class HomePageNavBar extends Component {
	constructor() {
		super();
		this.state = {
			NewHiveModal:false,
			SignOutModal: false,
			Collapsed: false
		};
		this.submitForm = this.submitForm.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.toggleNewHiveModal = this.toggleNewHiveModal.bind(this);
		this.toggleSignOutModal = this.toggleSignOutModal.bind(this);
	}
		
	submitForm(values) {
		this.setState({ values, NewHiveModal:false });
	}	


	toggleNavbar() {
		const currentState = this.state.Collapsed;
		this.setState({ Collapsed: !currentState });
	}
	
	toggleNewHiveModal() {
		const currentState = this.state.NewHiveModal;
		this.setState({ NewHiveModal: !currentState });
	}
	
	toggleSignOutModal() {
		const currentState = this.state.SignOutModal;
		this.setState({ SignOutModal: !currentState });
	}
	
	render() {
		
		const { values } = this.state;
		
		return (
			<div>
				<Navbar color="warning" dark>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<NavbarBrand href="/" className="mr-auto">BeeMinder</NavbarBrand>
					<Collapse isOpen={this.state.Collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<Button color="dark" onClick={this.toggleNewHiveModal}>+ New Hive</Button>
								<Modal isOpen={this.state.NewHiveModal} toggle={this.toggleNewHiveModal} className={this.className}>
									<ModalHeader toggle={this.toggleNewHiveModal} close={<button className="close" onClick={this.toggleNewHiveModal}>&times;</button>}>Add a New Hive</ModalHeader>
									<ModalBody>
										<NewHiveForm onFormSubmit={this.submitForm}/>
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
								<Button color="dark" onClick={this.toggleSignOutModal}>Sign Out</Button>
								<Modal isOpen={this.state.SignOutModal} toggle={this.toggleSignOutModal} className={this.className}>
									<ModalHeader toggle={this.toggleSignOutModal}>Sign Out</ModalHeader>
									<ModalBody>
										<p>Are you sure you want to sign out?</p>
									</ModalBody>
									<ModalFooter>
										<Button color="primary" onClick={this.toggleSignOutModal}>Sign Out</Button>{' '}
										<Button color="secondary" onClick={this.toggleSignOutModal}>Cancel</Button>
									</ModalFooter>
								</Modal>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				Submitted form values : <br/>
				username: {values && values.username} <br/>
				password: {values && values.psword} <br/>
				Hive name: {values && values.HiveName} <br/>
				HiveID: {values && values.HiveID} <br/>
			</div>
		);
	}
}

export default HomePageNavBar;
