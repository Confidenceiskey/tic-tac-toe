import React, { Component } from 'react';
import EntireBoard from '../components/EntireBoard/EntireBoard';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O']
    }
  }

  render() {
    const { gameBoard } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>TIC TAC TOE</h1>
        </header>
        <main className="App-main">
          <EntireBoard gameBoard={gameBoard}/>
        </main>
      </div>
    );
  }
}

export default App;
