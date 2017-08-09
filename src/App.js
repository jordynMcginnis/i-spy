import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TopHeader extends Component {
  render () {
    return (
      <p> It works! This will be the main header! </p>

    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TopHeader/>
        </div>
        <p className="App-intro">
          <p> Main content will go here!</p>
        </p>
      </div>
    );
  }
}

export default App;
