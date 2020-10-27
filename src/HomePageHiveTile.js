import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import {Link } from "react-router-dom";

class HomePageHiveTile extends Component {
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
				<Card>
					<CardBody>
						<h2>
							<CardTitle>{this.props.hiveTitle}</CardTitle>
						</h2>
						<CardText>Hive ID: </CardText>
						<CardText>Inside Temp: </CardText>
						<CardText>Inside Humidity: </CardText>
						<CardText>Weight: </CardText>
						<Link to="/MyHive"><Button color="success">Go To Hive</Button></Link>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default HomePageHiveTile;
