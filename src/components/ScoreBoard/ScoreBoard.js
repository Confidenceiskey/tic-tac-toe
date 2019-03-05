import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ playerClassName, computerClassName }) => {
  return (
    <div className='scoreBoard'>
      <h3 className={playerClassName}>PLAYER</h3>
      <h3 className={computerClassName}>COMPUTER</h3>
      <p className={`scoreTally ${playerClassName}`}>0</p>
      <p className={`scoreTally ${computerClassName}`}>0</p>
    </div>
  );
}

export default ScoreBoard;
