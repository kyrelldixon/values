import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, closeModal, open }) => (
  open
    ? ReactDOM.createPortal(
      <div className="fixed bg-white p-6" style={{ left: '25%', top: '4rem' }}>
        <button onClick={closeModal}>&times;</button>
        {children}
      </div>,
      document.getElementById('root')
    )
    : null
);

export default Modal;