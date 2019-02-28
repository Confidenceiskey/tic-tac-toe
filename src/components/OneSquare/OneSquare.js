import React from 'react';
import './OneSquare.css';

const OneSquare = ({ value }) => {
	return (
		<div className="each-square">
      <p className="board-font">{value}</p>
    </div>
	);
}

export default OneSquare;