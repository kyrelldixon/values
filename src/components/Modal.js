import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, closeModal, open }) => (
  open
    ? ReactDOM.createPortal(
      <section className="fixed bg-white border border-gray-400 z-50" style={{ top: '4rem' }}>
        <button onClick={closeModal}>&times;</button>
        {children}
      </section>,
      document.getElementById('root')
    )
    : null
);

export default Modal;