import React from 'react';
import './Frame.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import TicTacBoard from '../TicTacBoard/TicTacBoard';

const Frame = ({ gameBoard }) => {
  return (
    <div className='frame'> 
      <ScoreBoard />
      <TicTacBoard gameBoard={gameBoard} />
    </div>
    );
}

export default Frame;