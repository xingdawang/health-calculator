import React, { Component } from 'react';

class NavHeader extends Component {

	render() {
		return (
			
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="/">Lose Weight</a>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><a href="/bmi" >Body Mass Index</a></li>
								<li><a href="/bfp" >Body Fat Percentage</a></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
							</ul>
						</div>
					</div>
				</nav>
				
			
		)
	}
}

export default NavHeader