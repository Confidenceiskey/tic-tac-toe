import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => {
  return (
    <div className='scoreBoard'>
      <h3>PLAYER</h3>
      <h3>COMPUTER</h3>
      <p className='scoreTally'>0</p>
      <p className='scoreTally'>0</p>
    </div>
  );
}

export default ScoreBoard;
