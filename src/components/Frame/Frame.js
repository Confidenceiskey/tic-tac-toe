import React from 'react';
import './Frame.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import TicTacBoard from '../TicTacBoard/TicTacBoard';

const Frame = (props) => {
  return (
    <div className='frame'> 
      {props.children}
    </div>
  );
}

export default Frame;