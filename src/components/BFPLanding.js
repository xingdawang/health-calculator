import React, { Component } from 'react'
import UserForm from './UserForm'
import CalcBFP from './CalcBFP'

class BodyFatPercentage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'dateOfBirth': '',
			'height': 0,
			'weight': 0,
			'gender': 1
		};
		this.userInputForm = this.userInputForm.bind(this);
	}

	// Data flow from parent to child and child to parent:
	// https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs
	userInputForm = (userInput) => {
		this.setState({
			'dateOfBirth': userInput.dateOfBirth,
			'height': userInput.height,
			'weight': userInput.weight,
			'gender': userInput.gender
		})
	}

	render() {

		if(this.state.height !== 0 && this.state.weight !== 0) {
			return (
				<div>
					<CalcBFP state={this.state} />
				</div>
			)
		} else {
			return (
				<UserForm onUserUpdate={this.userInputForm}/>
			)
		}
		
	}
}

export default BodyFatPercentage