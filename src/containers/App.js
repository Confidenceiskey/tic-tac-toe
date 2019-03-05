import React, { Component } from 'react';
import EntireBoard from '../components/EntireBoard/EntireBoard';
import Frame from '../components/Frame/Frame';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import TicTacBoard from '../components/TicTacBoard/TicTacBoard';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: Array(9).fill(''),
      playerSide: "X",
      computerSide: "O",
      playerTurn: true
    }
  }

  playerMove = (event) => {
    const squareRef = event.target.id;
    const gameState = [...this.state.gameBoard];
    gameState[squareRef] = this.state.playerSide;

    this.setState({
      gameBoard: gameState,
      playerTurn: false
    })
  }
    

  render() {
    const { gameBoard } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>TIC TAC TOE</h1>
        </header>
        <main className="App-main">
          <EntireBoard>
            <Frame>
              <ScoreBoard />
              <TicTacBoard playerMove={this.playerMove} gameBoard={gameBoard} />
            </Frame>
          </EntireBoard>
        </main>
      </div>
    );
  }
}

export default App;

