import React from 'react';
import './GameBoard.css';
import OneSquare from '../OneSquare/OneSquare';

const GameBoard = ({ gameBoard }) => {
	return (
    <div className="entireBoard">
      {
        gameBoard.map((boardValue, i) => {
          return (
            <OneSquare
              key={i}
              value={gameBoard[i]}
            />
          )
        })
      }
    </div>
  );
}

export default GameBoard;