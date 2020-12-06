import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar';
import HomePageHiveTile from './HomePageHiveTile';
import NewHiveForm from './NewHiveForm'
import Footer from './Footer'
import RenderTileData from './RenderTileData';
import {Container,Jumbotron,CardDeck,Button,CardBody,Modal,ModalHeader,ModalBody} from 'reactstrap';

class HomePage extends Component {
    constructor(props) {
		super();
		this.state = {
			NewHiveModal:false,
		};
		this.submitForm = this.submitForm.bind(this);
		this.toggleNewHiveModal = this.toggleNewHiveModal.bind(this);
    }
	
	submitForm(values) {
		this.setState({ values, NewHiveModal:false });
	}
	
	toggleNewHiveModal() {
		const currentState = this.state.NewHiveModal;
		this.setState({ NewHiveModal: !currentState });
	}
	
    render() {
		const { values } = this.state;
        return (
            <div>
				<HomePageNavBar />
                <Jumbotron>
                    <h1 className="display-3">Welcome to BeeMinder</h1>
					<p className="lead">This is the homepage where you can see a all of your hives at a glance.</p>
					<hr className="my-2" />
					<p>To see more information on a specific hive, click on Go To Hive. To navigate around the webpage, use the Navigation Bar at the top of the page.</p>
                </Jumbotron>
				<Container>
					<RenderTileData />
				</Container>
				<br />
				<br />
				<Footer />
            </div>
        );
    }
}

export default HomePage;