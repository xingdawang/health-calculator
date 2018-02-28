import React, { Component } from 'react'

class CalcBMI extends Component {

	constructor(props) {
		super(props)
		this.state = {
			height: props.state.height,
			weight: props.state.weight
		}
	}

	render () {
		return (
			<div className="container">
				<div className="jumbotron">
					<h3><span className="label label-primary"> Your height </span>: {this.state.height} </h3>
					<h3><span className="label label-primary"> Your weight </span>: {this.state.weight} </h3>
				</div>
			</div>
		)
	}
}

export default CalcBMI