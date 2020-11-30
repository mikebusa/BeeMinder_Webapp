import React, { Component } from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

class DeleteHiveModal extends Component {
    constructor(props) {
        super();

        this.toggleDelete = this.toggleDelete.bind(this);
        this.state = {
            isOpen: false
        };
    }
	toggleDelete() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
	render() {
        return (
			<div>
				<Button outline color="danger" onClick={this.toggleDelete}>Delete Hive</Button>
				<Modal isOpen={this.state.isOpen} toggle={this.toggleDelete} className={this.className}>
					<ModalHeader toggle={this.toggleDelete}>Delete Hive</ModalHeader>
					<ModalBody>
						<p>Are you sure you want to delete this hive?</p>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.toggleDelete}>Delete</Button>{' '}
						<Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
					</ModalFooter>
				</Modal>	
			</div>
        );
    }
}

export default DeleteHiveModal;