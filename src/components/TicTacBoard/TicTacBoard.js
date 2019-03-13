import React from 'react';
import './TicTacBoard.css';
import OneSquare from '../OneSquare/OneSquare';

const TicTacBoard = ({ gameBoard, playerMove }) => {
	return (
    <div className="outsideGameArea">
      <div className="gridLines">
        {
          gameBoard.map((boardValue, i) => {
            return (
              <OneSquare
                key={i+1}
                id={i}
                value={gameBoard[i]}
                onClick={playerMove}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default TicTacBoard;