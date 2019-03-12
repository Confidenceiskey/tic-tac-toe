import React, { Component } from 'react';
import EntireBoard from '../components/EntireBoard/EntireBoard';
import Frame from '../components/Frame/Frame';
import GameEndModal from '../components/GameEndModal/GameEndModal';
import ModalPopup from '../components/ModalPopup/ModalPopup';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import StartModal from '../components/StartModal/StartModal';
import TicTacBoard from '../components/TicTacBoard/TicTacBoard';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: Array(9).fill(""),
      playerSide: "",
      playerScore: 0,
      computerSide: "",
      computerScore: 0,
      playerTurn: true,
      gameStatus: "game in play"
    }
  }

  playerMove = (event) => {
    const { gameBoard, gameStatus, playerSide, 
      computerSide} = this.state;
    let clickedSquare = event.target.id;
    let currentGameState = [...gameBoard];

    if (currentGameState[clickedSquare] === '' && gameStatus === "game in play") {
      currentGameState[clickedSquare] = playerSide;
      this.updateGameBoard(currentGameState);

      if (this.isWinner(currentGameState, playerSide)) {
        this.updateStatus("You win!");
        this.updatePlayerScore();

      } else if (currentGameState.includes('') && gameStatus === "game in play") {
        setTimeout(() => this.computerMove(currentGameState, computerSide), 430);
      
      } else {
        this.setState({
          gameStatus: "Draw"
        })
      }
    } 
  }

  updateGameBoard = (gameState) => {
    this.setState({
      gameBoard: gameState,
      playerTurn: !this.state.playerTurn
    })
  }

  isWinner = (gameBoard, side) => {
    const allWiningCombos = [
      [0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], 
      [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]
    ];

    for (const eachWiningLine of allWiningCombos) {
      if (
        gameBoard[eachWiningLine[0]] === gameBoard[eachWiningLine[1]] && 
        gameBoard[eachWiningLine[0]] === gameBoard[eachWiningLine[2]] &&
        gameBoard[eachWiningLine[0]] === side
      ) {
        return true;  
      }
    }
    return false;
  }

  updateStatus = (result) => {
    this.setState({
      gameStatus: result,
    })
  }

  updatePlayerScore = () => {
    this.setState({
      playerScore: this.state.playerScore + 1
    })
  }

  computerMove = (currentGameState, computerSide) => {
    let depth = 0;
    const bestIndexNum = this.miniMaxAI(currentGameState, computerSide, depth);
    
    currentGameState[bestIndexNum] = computerSide;
    this.updateGameBoard(currentGameState);

    if (this.isWinner(currentGameState, computerSide)) {
      this.updateStatus("You lose!");
      this.updateComputerScore();
    }
  }

  miniMaxAI = (currentGameState, side, depth) => {
    if (!this.isWinner(currentGameState, side) && currentGameState.includes('')) {
      const winningChanceValues = [];

      for (let [i, square] of currentGameState.entries()) {
        const updatedGameState = [...currentGameState];

        if (square === '') {
          updatedGameState[i] = side;
          const newSide = (side === this.state.playerSide ? this.state.computerSide : this.state.playerSide);
          const winningChanceValue = this.miniMaxAI(updatedGameState, newSide, depth + 10);
          winningChanceValues.push({ 
            winningChanceValue: winningChanceValue,
            indexNum: i  
          });
        }
      }

      if (side === this.state.computerSide) {
        const maxWinningChance = winningChanceValues.reduce((val1, val2) => {
          if (val1.winningChanceValue < val2.winningChanceValue) {
            return val2;
          } else {
            return val1;
          }
        })

        if (depth === 0) {
          return maxWinningChance.indexNum;

        } else {
          return maxWinningChance.winningChanceValue;
        }

      } else {
        const minWinningChance = winningChanceValues.reduce((val1, val2) => {
          if (val1.winningChanceValue > val2.winningChanceValue) {
            return val2;
          } else {
            return val1;
          }
        })

        if (depth === 0) {
          return minWinningChance.indexNum;

        } else {
          return minWinningChance.winningChanceValue;
        }
      }

    } else {
      return this.calculateChanceOfWin(currentGameState, side, depth);
    }
  }

  calculateChanceOfWin = (gameState, side, depth) => {
    // Tie
    if (!gameState.includes('')) {
      return 0;

    } else if (side === this.state.playerSide) {
      return depth - 100;

    } else if (side === this.state.computerSide) {
      return 100 - depth;
    }
  }

  updateComputerScore = () => {
    this.setState({
      computerScore: this.state.computerScore + 1
    })
  }

  chooseSide = (event) => {
    const side = event.target.innerHTML;
    this.setState({
      playerSide: side,
      computerSide: side === "X" ? "O" : "X"
    })
  }

  hideElement = (hideClassName) => {
    return hideClassName += "hide";
  }

  restartGame = () => {
    this.setState({
      gameBoard: Array(9).fill(""),
      gameStatus: "game in play",
      playerTurn: true
    })
  }

  render() {
    const { gameBoard, playerTurn, playerSide, 
      gameStatus, playerScore, computerScore } = this.state;

      const showEndingModal = (word) => {
        return word;
      }

    //Visually sets whose turn it is through classNames 
    let computerClassName = '';
    let playerClassName = '';
    let gameOverClassName = "hidden";

    if (gameStatus === "game in play") {

      if (playerTurn === true) {
        playerClassName += " currentTurn";

      } else {
        computerClassName += " currentTurn";
      }

    } else {
      computerClassName = "currentTurn";
      playerClassName = "currentTurn";
      gameOverClassName = showEndingModal("show");

      setTimeout(() => {
        this.restartGame()
      }, 1350);
    }

    // Determines when the modal disappears
    let modalClassName = '';
    let hideClassName = '';

    if (playerSide !== '') {
      modalClassName = "fade";

      setTimeout(() => {
        this.hideElement(hideClassName);
      }, 500);
    }

    return (
      <div className="App">
        <ModalPopup modalClassName={modalClassName} hideClassName={hideClassName}>
          <StartModal chooseSide={this.chooseSide} />
        </ModalPopup>
        <ModalPopup gameOverClassName={gameOverClassName}>
          <GameEndModal gameStatus={gameStatus}/>
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