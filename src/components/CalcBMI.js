import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

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
				<div className="jumbotron col-md-12">
					<div className="col-md-6">
						<h3><span className="label label-primary"> Your height </span>: {this.state.height} </h3>
						<h3><span className="label label-primary"> Your weight </span>: {this.state.weight} </h3>
						<h3>
							<span className="label label-primary"> Your BMI </span>
							: { (this.state.weight / this.state.height / this.state.height * 10000).toPrecision(4) }
						</h3>
					</div>
					<div className="col-md-6">
						<Chart
							chartType="Gauge"
							data={[
								['Label', 'Value'],
								['BMI', Number((this.state.weight / this.state.height / this.state.height * 10000).toPrecision(4)) ]
							]}
							options={{
								redFrom: 35, redTo: 55,
								yellowFrom: 25, yellowTo: 35,
								greenFrom: 10, greenTo: 25,
								majorTicks : ['15', '20','25','30','35','40','45','50'],
								minorTicks: 5,
								animation:{
									duration: 1000,
									easing: 'inAndOut'
								},
								max: 50, min: 15
							}}
							graph_id="GaugeChart"
							width="100%"
							height="300px"
							legend_toggle
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default CalcBMI