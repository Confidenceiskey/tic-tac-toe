import React, { Component } from 'react';
import EntireBoard from '../components/EntireBoard/EntireBoard';
import Frame from '../components/Frame/Frame';
import ModalPopup from '../components/ModalPopup/ModalPopup';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import StartModal from '../components/StartModal/StartModal';
import TicTacBoard from '../components/TicTacBoard/TicTacBoard';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: Array(9).fill(''),
      playerSide: "",
      playerScore: 0,
      computerSide: "",
      computerScore: 0,
      playerTurn: true,
      gameStatus: ''
    }
  }

  playerMove = (event) => {
    //Determines which square was clicked and sets its 
    //value equal to either 'X' or 'O'
    const squareRef = event.target.id;
    const gameState = [...this.state.gameBoard];
    gameState[squareRef] = this.state.playerSide;

    //Prevents further clicking after game is over!
    if (this.state.gameStatus === '') {
      //Updates state to reflect the new gameboard & whose
      //turn it is
      this.updateState(gameState);

      //Checks if game is over, if not, calls function 
      //for computer to make a move 
      let gameFate = this.checkWinner(gameState, this.state.playerSide, this.state.computerSide);

      //Case 1: Winner
      if (gameFate === 'player won') {
        this.setState({
          gameStatus: "You win!",
          playerScore: this.state.playerScore + 1
        })
        //alert("You win!");

      //Case 2: Loser
      } else if (gameFate === 'computer won') {
        this.setState({
          gameStatus: "You lose!",
          computerScore: this.state.computerScore + 1
        })

      //Computer Move
      } else if (gameState.includes('')) {
        setTimeout(() => this.computerMove(gameState), 430);
      
      //Case 3: Draw
      } else { 
        this.setState({
          gameStatus: "Draw"
        })
        console.log('draw');
      }
    }
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

  checkWinner = (gameState, playerSide, computerSide) => {
    //All possible winning combinations for tic-tac-toe game
    const winningCombos = [
      [0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], 
      [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]
    ];
    let playerFate = '';

    //Finds squares selected by player
    const didPlayerWin = gameState.map((box, i) => {
      if (box === playerSide) {
        return i;
      }
      return undefined;
    }).filter (box => {
      return !isNaN(box);
    })

    //Determines if winning combination matches
    for (let i = 0; i < winningCombos.length; i++) {
      if (didPlayerWin.map(num => {
        return (winningCombos[i].includes(num) ? num : undefined) 
      }).filter(num => {
        return num !== undefined;
      }).length === 3) {
        playerFate = 'player won';
      }
    }
    return playerFate;
  }


  //Updates game state after each turn
  updateState = (gameState) => {
    this.setState({
      gameBoard: gameState,
      playerTurn: !this.state.playerTurn
    })
  }

    //Selects the proper side the player wants to play
  chooseSide = (event) => {
    const side = event.target.innerHTML;
    this.setState({
      playerSide: side,
      computerSide: side === 'X' ? 'O' : 'X'
    })
  }

  //Hides element on the page with a delay
  hideElement = (hideClassName) => {
    return hideClassName += 'hide';
  }

  componentWillUnmount() {
    clearTimeout(this.hideElement)
  }

  render() {
    const { gameBoard, playerTurn, playerSide, 
      gameStatus, playerScore, computerScore } = this.state;

    //Visually sets whose turn it is through classNames 
    let computerClassName = '';
    let playerClassName = '';

    if (gameStatus === '') {
      if (playerTurn === true) {
        playerClassName += ' currentTurn';
      } else {
        computerClassName += ' currentTurn';
      }
    } else {
      computerClassName = 'currentTurn';
      playerClassName = 'currentTurn';
    }

    // Determines when the modal disappears
    let modalClassName = '';
    let hideClassName = '';

    if (playerSide !== '') {
      modalClassName = 'fade';

      setTimeout(() => {
        this.hideElement(hideClassName);
      }, 500);
    }

    return (
      <div className="App">
        <ModalPopup modalClassName={modalClassName} hideClassName={hideClassName}>
          <StartModal chooseSide={this.chooseSide} />
        </ModalPopup>
        <header className="App-header">
          <h1>TIC TAC TOE</h1>
        </header>
        <main className="App-main">
          <EntireBoard>
            <Frame>
              <ScoreBoard 
                playerClassName={playerClassName} 
                computerClassName={computerClassName} 
                playerScore={playerScore}
                computerScore={computerScore}
              />
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

