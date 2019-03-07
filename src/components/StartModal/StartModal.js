import React from 'react';
import './StartModal.css';

const StartModal = ({ chooseSide }) => {
  return (
    <div className='modal'>
      <p className='main-text'>SELECT SIDE</p>
      <p className='side' onClick={chooseSide}>X</p>
      <p className='side' onClick={chooseSide}>O</p>
    </div>
  );
}

export default StartModal;