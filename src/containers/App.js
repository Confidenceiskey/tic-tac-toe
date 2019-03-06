import React, { Component } from 'react';
import EntireBoard from '../components/EntireBoard/EntireBoard';
import Frame from '../components/Frame/Frame';
import ModalPopup from '../components/ModalPopup/ModalPopup';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import TicTacBoard from '../components/TicTacBoard/TicTacBoard';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: Array(9).fill(''),
      playerSide: "",
      computerSide: "",
      playerTurn: true,
      gameStatus: '',
      isModalOn: false
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
    setTimeout(() => this.computerMove(gameState), 430);
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

    if (availableSquares.length === 0) {
      console.log('Game Over!')
    } else {
      //Assigns a random Number for the computer AI's next move
      const randNum = Math.floor((Math.random() * availableSquares.length));

      //Sets the randomly picked available square as the
      //computer's turn
      gameState[availableSquares[randNum]] = this.state.computerSide;

      //Updates state to reflect the gameboard & whose 
      //turn it is
      this.updateState(gameState);
    }
  }

  //Updates game state after each turn
  updateState = (gameState) => {
    this.setState({
      gameBoard: gameState,
      playerTurn: !this.state.playerTurn
    })
  }

  //Changes whether the modal appears or not
  // toggleModal = (playerSide, gameStatus) => {
  //   if (playerSide !== "" || gameStatus !== "") {
  //     this.setState({
  //       isModalOn: !this.state.isModalOn
  //     });
  //   }
  //   return this.state.isModalOn;
  // }

    //Selects the proper side the player wants to play
  chooseSide = (event) => {
    const side = event.target.innerHTML;
    this.setState({
      playerSide: side,
      computerSide: side === 'X' ? 'O' : 'X'
    })
  }

  render() {
    const { gameBoard, playerTurn, playerSide } = this.state;

    //Visually sets whose turn it is through classNames 
    let computerClassName = '';
    let playerClassName = '';

    if (this.state.playerTurn === true) {
      playerClassName += ' currentTurn';
    } else {
      computerClassName += ' currentTurn';
    }

    // Determines when the modal disappears
    let modalClassName = '';

    if (this.state.playerSide !== '') {
      modalClassName = 'fade';
    }

    return (
      <div className="App">
        <ModalPopup chooseSide={this.chooseSide} modalClassName={modalClassName}/>
        <header className="App-header">
          <h1>TIC TAC TOE</h1>
        </header>
        <main className="App-main">
          <EntireBoard>
            <Frame>
              <ScoreBoard playerClassName={playerClassName} computerClassName={computerClassName} />
              <TicTacBoard playerMove={this.playerMove} gameBoard={gameBoard} />
            </Frame>
          </EntireBoard>
        </main>
        <footer className="App-footer">
          <p>Designed by David Nowak</p>
        </footer>
      </div>
    );
  }
}

export default App;

