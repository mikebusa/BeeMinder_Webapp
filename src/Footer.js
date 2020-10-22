import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Footer = (props) => {
	const {
		className
	} = props;

	return (
		<div>  
			<Navbar color="secondary" dark>
				<NavbarBrand>
					<p style={{textAlign: 'center'}}>BeeMinder 2020</p>
				</NavbarBrand>
			</Navbar>
		</div>
	);
}

export default Footer;
