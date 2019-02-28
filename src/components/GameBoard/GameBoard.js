import React from 'react';
import OneSquare from '../OneSquare/OneSquare';

const GameBoard = ({ gameBoard }) => {
	return (
    <div>
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