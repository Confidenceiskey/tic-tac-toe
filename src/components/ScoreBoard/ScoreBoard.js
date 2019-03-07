import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ playerClassName, computerClassName, playerScore, computerScore }) => {
  return (
    <div className='scoreBoard'>
      <h3 className={playerClassName}>PLAYER</h3>
      <h3 className={computerClassName}>COMPUTER</h3>
      <p className={`scoreTally ${playerClassName}`}>{playerScore}</p>
      <p className={`scoreTally ${computerClassName}`}>{computerScore}</p>
    </div>
  );
}

export default ScoreBoard;
