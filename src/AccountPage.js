import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar';
import {
    Container,
    Row,
    Col,
    Jumbotron,
	CardDeck,
	Table
} from 'reactstrap';

class AccountPage extends Component {s
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
	toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
	render() {
        return (
            <div>
				<HomePageNavBar />
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
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Hive 1</td>
							<td>10/19/20 02:41:53 pm</td>
							<td>05/20/20</td>
							<td  style={{ color: 'green' }}>Good</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Hive 2</td>
							<td>10/18/20 10:10:02 pm</td>
							<td>06/11/20</td>
							<td  style={{ color: 'gold' }}>Warning</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Hive 3</td>
							<td>10/18/20 11:14:21 am</td>
							<td>6/30/20</td>
							<td  style={{ color: 'red' }}>Check Your Hive</td>
						</tr>
					</tbody>
				</Table>
            </div>
        );
    }
}

export default AccountPage;