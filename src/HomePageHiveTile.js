import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, Collapse
} from 'reactstrap';

const HomePageHiveTile = (props) => {
  const HiveNumber = 3;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
		<Card>
			<CardBody>
				<h2>
					<CardTitle>Hive {HiveNumber}</CardTitle>
				</h2>
				<Button color="primary" onClick={toggle}>Details</Button> <Button color="success">Go To Hive</Button>
				<Collapse isOpen={isOpen}>
					<br />
					<CardText>Inside Temp: </CardText>
					<CardText>Inside Humidity: </CardText>
					<CardText>Weight: </CardText>
				</Collapse>
			</CardBody>
		</Card>
    </div>
  );
};

export default HomePageHiveTile;
