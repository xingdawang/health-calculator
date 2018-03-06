import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

class CalcBFP extends Component {

	constructor(props) {
		super(props);
		this.state = {
			height: props.state.height,
			weight: props.state.weight,
			gender: props.state.gender,
			dateOfBirth: props.state.dateOfBirth,
		};
		this.calcBfp =  this.calcBfp.bind(this);
	}

	calcBfp = () => {
		let bmi = this.state.weight / this.state.height / this.state.height * 10000;
		let temp = this.state.dateOfBirth.split('-');
		let year = temp[0];
		let age = new Date().getFullYear() - year;
		let bfp = (1.2 * bmi) - (0.23 * age) - (0.8 * this.state.gender) - 5.4;
		return bfp.toPrecision(4);
	}

	render () {
		return (
			<div className="container">
				<div className="jumbotron col-md-12">
					<div className="col-md-6">
						<h3><span className="label label-primary"> Your height </span>: {this.state.height} </h3>
						<h3><span className="label label-primary"> Your weight </span>: {this.state.weight} </h3>
						<h3><span className="label label-primary"> Your gender </span>: {this.state.gender} </h3>
						<h3><span className="label label-primary"> Your birthdate </span>: {this.state.dateOfBirth} </h3>
						<h3>
							<span className="label label-primary"> Your BFP </span>: {this.calcBfp()}
						</h3> 
					</div>
					<div className="col-md-6">
						{this.state.gender === 1 ? 
							<Chart
								chartType="Gauge"
								data={[
									['Label', 'Value'],
									['BFP', Number(this.calcBfp()) ]
								]}
								options={{
									redFrom: 29, redTo: 45,
									yellowFrom: 22, yellowTo: 29,
									greenFrom: 0, greenTo: 22,
									majorTicks : ['0','4','8','12','16','20','24','28','32','36'],
									minorTicks: 4,
									animation:{
										duration: 1000,
										easing: 'inAndOut'
									},
									max: 36, min: 0
								}}
								graph_id="GaugeChart"
								width="100%"
								height="300px"
								legend_toggle
							/>
							:
							<Chart
								chartType="Gauge"
								data={[
									['Label', 'Value'],
									['BFP', Number(this.calcBfp()) ]
								]}
								options={{
									redFrom: 39, redTo: 55,
									yellowFrom: 31, yellowTo: 39,
									greenFrom: 5, greenTo: 31,
									majorTicks : ['10','15','20','25','30','35','40','45','50'], 
									minorTicks: 5,
									animation:{
										duration: 1000,
										easing: 'inAndOut'
									},
									max: 50, min: 10
								}}
								graph_id="GaugeChart"
								width="100%"
								height="300px"
								legend_toggle
							/>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default CalcBFP