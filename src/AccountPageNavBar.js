import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {Link } from "react-router-dom";

class AccountPageNavBar extends Component {
	constructor() {
		super();
		this.state = {
			SignOutModal: false,
			Collapsed: false
		};
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.toggleSignOutModal = this.toggleSignOutModal.bind(this);
	}

	toggleNavbar() {
		const currentState = this.state.Collapsed;
		this.setState({ Collapsed: !currentState });
	}
	
	toggleSignOutModal() {
		const currentState = this.state.SignOutModal;
		this.setState({ SignOutModal: !currentState });
	}
	
	render() {		
		return (
			<div>
				<Navbar color="warning" light expand="md">
					<NavbarBrand href="/">BeeMinder</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} />
					<Collapse isOpen={this.state.Collapsed} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link to="/"><Button color="link" outline="false">Home Page</Button></Link>
							</NavItem>
						</Nav>
						<NavItem>
							<Button color="link" outline="false" onClick={this.toggleSignOutModal}>Sign Out</Button>
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
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default AccountPageNavBar;
