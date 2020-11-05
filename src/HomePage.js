import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar';
import HomePageHiveTile from './HomePageHiveTile';
import Footer from './Footer'
import {
    Container,
    Jumbotron,
	CardDeck,
} from 'reactstrap';

class HomePage extends Component {
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
                    <h1 className="display-3">Welcome to BeeMinder</h1>
					<p className="lead">This is the homepage where you can see a all of your hives at a glance.</p>
					<hr className="my-2" />
					<p>To see more information on a specific hive, click on Go To Hive. To navigate around the webpage, use the Menu Bar in the top left corner.</p>
                </Jumbotron>
				<Container>
					<CardDeck>
						<HomePageHiveTile hiveTitle={'Hive 1'} />
						<HomePageHiveTile hiveTitle={'Hive 2'} />
						<HomePageHiveTile hiveTitle={'Hive 3'} />
					</CardDeck>
				</Container>
				<br />
				<br />
				<Footer />
            </div>
        );
    }
}

export default HomePage;