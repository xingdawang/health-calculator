import React, { Component } from 'react';
import NavHeader from './NavHeader'
import '../styles/index.scss'
import './test'


class App extends Component {
  render() {
    return (
      <div>
        <NavHeader />
        <div className="home-page-content">
          <h1 className="home-page-content-title"> Lose weight! </h1>
        </div>
      </div>
    )
  }
}

export default App;
