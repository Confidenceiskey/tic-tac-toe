import React from 'react';
import './OneSquare.css';

const OneSquare = ({ value }) => {
	return (
		<div className="square-container">
      <section className="each-square">
        <p className="board-font">{value}</p>
      </section>
    </div>
	);
}

export default OneSquare;