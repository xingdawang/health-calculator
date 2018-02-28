import React, { Component } from 'react'
import UserForm from './UserForm'
import NotFound from './NotFound'

class BodyMassIndex extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'dateOfBirth': '',
			'height': 0,
			'weight': 0
		};
		this.userInputForm = this.userInputForm.bind(this);
	}

	// Data flow from parent to child and child to parent:
	// https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs
	userInputForm = (userInput) => {
		this.setState({
			'dateOfBirth': userInput.dateOfBirth,
			'height': userInput.height,
			'weight': userInput.weight
		})
	}

	render() {
		return (
			<div>
				<UserForm onUserUpdate={this.userInputForm}/>
				Not Finished
				{ console.log(this.state) }
			</div>
		)
	}
}

export default BodyMassIndex