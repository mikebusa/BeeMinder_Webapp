import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, Button, CardFooter
} from 'reactstrap';

const HomePageHiveTile = (props) => {
  const HiveTitle = "Hive 1";
  return (
    <div>
		<Card>
			<CardBody>
				<h1>
					<CardTitle>Hive 1</CardTitle>
				</h1>
				<CardText>Inside Temp: </CardText>
				<CardText>Inside Humidity: </CardText>
				<CardText>Weight: </CardText>
				<Button color="success">Details</Button> <Button color="danger">Remove Hive</Button>
			</CardBody>
		</Card>
    </div>
  );
};

export default HomePageHiveTile;
