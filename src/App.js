import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar';
import HomePageHiveTile from './HomePageHiveTile';
import NewHiveModal from './NewHiveModal';

import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
	CardDeck,
} from 'reactstrap';

class App extends Component {
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
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to the BeeMinder Home Page</h1>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
				<CardDeck>
					<HomePageHiveTile />
					<HomePageHiveTile />
					<HomePageHiveTile />
				</CardDeck>
            </div>
        );
    }
}

export default App;