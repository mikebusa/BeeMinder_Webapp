import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import FFTGraph from './FFTGraph';

function GraphModal (props) {
	const {
		className,
		fftData,
		numPoints
	} = props;
	
	//Modal Controls
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<div>
			<h3>Audio Inferences: <Button color="success" onClick={toggle}>Show FFT Graph</Button> </h3>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle} close={<button className="close" onClick={toggle}>&times;</button>}>FFT</ModalHeader>
				<ModalBody>
					<FFTGraph fftData = {fftData} numPoints = {numPoints}/>
				</ModalBody>
			</Modal>
		</div>
	);
}

export default GraphModal;