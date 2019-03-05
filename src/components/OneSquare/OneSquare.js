import React from 'react';
import './OneSquare.css';

const OneSquare = ({ id, value, onClick }) => {
	return (
		<div className="each-square" onClick={onClick}>
      <p className="board-font" id={id}>{value}</p>
    </div>
	);
}

export default OneSquare;