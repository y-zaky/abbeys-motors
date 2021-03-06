import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarGrid from './carGrid'
import Navigation from './navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
              <Navigation/>
          <div className="texts">
            <div className="App-header-text">
              <h2>Welcome to Abbey's Motors</h2>
              <h2>We've got dodgy vehicles to suit your needs!</h2>
            </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" /> 
        </div>

      <CarGrid/>
      </div>
        
     
    );
  }
}

export default App;
