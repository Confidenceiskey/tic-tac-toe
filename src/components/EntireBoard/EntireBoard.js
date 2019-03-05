import React from 'react';
import './EntireBoard.css';

const EntireBoard = (props) => {
	return (
    <div className="entireBoard">
      {props.children}
    </div>
  );
}

export default EntireBoard;