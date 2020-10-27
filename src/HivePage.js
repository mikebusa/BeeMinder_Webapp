import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar';
import Footer from './Footer'
import {
    Container,
    Jumbotron,
	Table,
	Media
} from 'reactstrap';

class HivePage extends Component {s
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
				<Jumbotron>
                    <h1 className="display-4">Hive Title</h1>
					<hr className="my-2" />
					<p>Last Updated: 10/21/2020 06:23:12pm</p>
                </Jumbotron>
				<Container>
					<h3>Audio Information:</h3>
					<Media left href="#">
						<Media object data-src="./beehive_card.jpg" />
					</Media>
					<h3>Temperature Sensors:</h3>
					<Table hover>
						<thead>
							<tr>
								<th>Location</th>
								<th>Current Reading</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Inside Hive</th>
								<td>84° F</td>
								<td style = {{color: "gold"}}>Warning</td>
							</tr>
							<tr>
								<th scope="row">Outside Hive</th>
								<td>76° F</td>
								<td style = {{color: "green"}}>Good</td>
							</tr>
						</tbody>
					</Table>
					
					<h3>Humidity Sensors:</h3>
					<Table hover>
						<thead>
							<tr>
								<th>Location</th>
								<th>Current Reading</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Inside Hive</th>
								<td>65 %</td>
								<td style = {{color: "green"}}>Good</td>
							</tr>
							<tr>
								<th scope="row">Outside Hive</th>
								<td>0 %</td>
								<td style = {{color: "green"}}>Good</td>
							</tr>
						</tbody>
					</Table>
					
					<h3>Weight Sensors:</h3>
					<Table hover>
						<thead>
							<tr>
								<th>Location</th>
								<th>Current Reading</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Top Left</th>
								<td>98.2 lbs</td>
								<td style = {{color: "green"}}>Good</td>
							</tr>
							<tr>
								<th scope="row">Top Right</th>
								<td>98.9 lbs</td>
								<td style = {{color: "green"}}>Good</td>
							</tr>
							<tr>
								<th scope="row">Bottom Left</th>
								<td>0 lbs</td>
								<td style = {{color: "red"}}>Critical Warning</td>
							</tr>
							<tr>
								<th scope="row">Bottom Right</th>
								<td>98.7 lbs</td>
								<td style = {{color: "green"}}>Good</td>
							</tr>
						</tbody>
					</Table>
				</Container>
				<Footer />
            </div>
        );
    }
}

export default HivePage;