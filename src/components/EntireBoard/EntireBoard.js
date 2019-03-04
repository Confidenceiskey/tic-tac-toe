import React from 'react';
import './EntireBoard.css';
import Frame from '../Frame/Frame';

const EntireBoard = (props) => {
	return (
    <div className="entireBoard">
      {props.children}
    </div>
  );
}

export default EntireBoard;