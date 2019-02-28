import React, { Component } from 'react';
import OneSquare from '../components/OneSquare/OneSquare';
import GameBoard from '../components/GameBoard/GameBoard';
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
          <img className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <h1>TIC TAC TOE</h1>
          <GameBoard gameBoard={gameBoard}/>
          <OneSquare />
        </main>
      </div>
    );
  }
}

export default App;
