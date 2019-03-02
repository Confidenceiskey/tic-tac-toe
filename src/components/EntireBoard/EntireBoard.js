import React from 'react';
import './EntireBoard.css';
import Frame from '../Frame/Frame';

const EntireBoard = ({ gameBoard }) => {
	return (
    <div className="entireBoard">
      <Frame gameBoard={ gameBoard } /> 
    </div>
  );
}

export default EntireBoard;