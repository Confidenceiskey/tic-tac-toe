import React from 'react';
import './TicTacBoard.css';
import OneSquare from '../OneSquare/OneSquare';

const TicTacBoard = ({ gameBoard }) => {
	return (
    // <div className="entireBoard">
      <div className="outsideGameArea">
        <div className="gridLines">
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
      </div>
    // </div>
  );
}

export default TicTacBoard;