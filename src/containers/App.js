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
    //Determines which square was clicked and sets its 
    //value equal to either 'X' or 'O'
    const squareRef = event.target.id;
    const gameState = [...this.state.gameBoard];
    gameState[squareRef] = this.state.playerSide;

    //Updates state to reflect the new gameboard & whose
    //turn it is
    this.updateState(gameState);

    //Calls function for computer to make a move
    this.computerMove(gameState);
  } 

  computerMove = (gameState) => {
    //Maps & filters out the current available positions left 
    //by index values on the game board
    const availableSquares = gameState.map((square, i) => {
      if (square === "") {
        return square + i;
      } else {
        return square;
      }
    }).filter(square => {
      return !isNaN(square);
    })

    //Assigns a random Number for the computer AI's next move
    const randNum = Math.floor((Math.random() * availableSquares.length));

    //Sets the randomly picked available square as the
    //computer's turn
    gameState[availableSquares[randNum]] = this.state.computerSide;

    //Updates state to reflect the gameboard & whose 
    //turn it is
    this.updateState(gameState);
  }

  //Updates game state after each turn
  updateState = (gameState) => {
    this.setState({
      gameBoard: gameState,
      playerTurn: !this.state.playerTurn
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

