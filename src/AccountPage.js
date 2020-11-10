import React, { Component } from 'react';
import AccountPageNavBar from './AccountPageNavBar';
import Footer from './Footer'
import {Container,Row,Col,Jumbotron,Table,Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {Link } from "react-router-dom";

class AccountPage extends Component {s
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
				<AccountPageNavBar />
				<Jumbotron color = "dark">
                    <Container>
                        <Row>
                            <Col>
                                <h1>My Hives</h1>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
				<Table hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Hive Name</th>
							<th>Last Updated</th>
							<th>Date Added</th>
							<th>Current Status</th>
							<th />
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td><Link to="/MyHive">Hive 1</Link></td>
							<td>10/19/20 02:41:53 pm</td>
							<td>05/20/20</td>
							<td  style={{ color: 'green' }}>Good</td>
							<td><Button outline color="danger" onClick={this.toggleDelete}>Delete Hive</Button></td>
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
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Hive 2</td>
							<td>10/18/20 10:10:02 pm</td>
							<td>06/11/20</td>
							<td  style={{ color: 'gold' }}>Warning</td>
							<td><Button outline color="danger" onClick={this.toggleDelete}>Delete Hive</Button></td>
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
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Hive 3</td>
							<td>10/18/20 11:14:21 am</td>
							<td>06/30/20</td>
							<td  style={{ color: 'red' }}>Check Your Hive</td>
							<td><Button outline color="danger" onClick={this.toggleDelete}>Delete Hive</Button></td>
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
						</tr>
					</tbody>
				</Table>
				<Footer />
            </div>
        );
    }
}

export default AccountPage;