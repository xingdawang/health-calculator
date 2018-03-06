import React from 'react'
import ReactDOM from 'react-dom'
import NavHeader from './components/NavHeader'
import HomePage from './components/HomePage'
import BodyMassIndex from './components/BMILanding'
import BodyFatPercentage from './components/BFPLanding'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<div>
		<NavHeader />
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/bmi" component={BodyMassIndex} />
				<Route path="/bfp" component={BodyFatPercentage} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
