import React from 'react';
import './GameEndModal.css';

const GameEndModal = ({ gameStatus }) => {
  return (
    <div className='end-modal'>
      <p className='winner-text'>{gameStatus}</p>
    </div>
  );
}

export default GameEndModal;