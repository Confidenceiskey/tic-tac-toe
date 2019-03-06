
import React from 'react';
import './ModalPopup.css';

const ModalPopup = ({ chooseSide, modalClassName }) => {
  return (
    <div className={`modal-outer ${modalClassName}`}> 
      <div className='modal'>
        <p className='main-text'>SELECT SIDE</p>
        <p className='side' onClick={chooseSide}>X</p>
        <p className='side'>O</p>
      </div>
    </div>
  );
}

export default ModalPopup;