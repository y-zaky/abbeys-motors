import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <div className="texts">
            <div className="App-header-text">
              <h2>Welcome to Abbey's Motors</h2>
              <h2>We've got dodgy vehicles to suit your needs!</h2>
            </div>
          </div>
          
        </div>
      </div>
        
     
    );
  }
}

export default App;
