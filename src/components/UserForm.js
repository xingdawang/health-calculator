import React, { Component } from 'react'

class UserForm extends Component {

	constructor(props) {
		super(props);
		this.userInputForm = this.userInputForm.bind(this);
	}

	state = {
			dateOfBirth: '',
			height: 0,
			weight: 0
		}

	userInputForm = (event) => {
		event.preventDefault();

		this.props.onUserUpdate({
			'dateOfBirth': this.state.dateOfBirth,
			'height': this.state.height,
			'weight': this.state.weight
		});
	}

	handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		this.setState({
			[name]: target.value
		});
	}

	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<form onSubmit={this.userInputForm} >
						<div className="form-group">
							<label>Date of Birth (MM/DD/YYYY) </label>
							<input
								type="date"
								name="dateOfBirth"
								className="form-control"
								placeholder="Date of Birth"
								value={this.state.dateOfBirth}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label>Height (cm) </label>
							<input
								type="number"
								name="height"
								className="form-control"
								placeholder="Height"
								value={this.state.height}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label>Weight (kg) </label>
							<input
								type="number"
								name="weight"
								className="form-control"
								placeholder="Weight"
								value={this.state.weight}
								onChange={this.handleInputChange}
							/>
						</div>
						<button type="submit" className="btn btn-default">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default UserForm