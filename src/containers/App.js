import React, { Component } from 'react';
import OneSquare from '../components/OneSquare/OneSquare';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
        </header>
        <body className="App-body">
          <h1>TIC TAC TOE</h1>
          <OneSquare />
        </body>
      </div>
    );
  }
}

export default App;
