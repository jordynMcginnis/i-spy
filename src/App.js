import React, { Component } from 'react';
import './App.css';

var ReactRouter=require('react-router-dom');
var Nav=require('./Nav');
var Router=ReactRouter.BrowserRouter;
var Route=ReactRouter.Route;
var Switch=ReactRouter.Switch;
var First=require("./First");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className='App-header'>
              <Nav />
            </div>
            <div className='App-intro'>
              <Switch>
                <Route exact path='/first'  component={First}/>
                <Route exact path='/second'  />
                <Route exact path='/third' />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;





