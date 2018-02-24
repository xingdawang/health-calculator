import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';

class NavHeader extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">Lose Killer</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">Link</NavItem>
					<NavItem eventKey={2} href="#">Link</NavItem>
				</Nav>
			</Navbar>

		)
	}
}

export default NavHeader