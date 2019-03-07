
import React from 'react';
import './ModalPopup.css';

const ModalPopup = (props) => {
  return (
    <div className={`modal-outer ${props.modalClassName} ${props.hideClassName}`}> 
      {props.children}
    </div>
  );
}

export default ModalPopup;