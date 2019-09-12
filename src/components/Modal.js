import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, closeModal, open }) => (
  open
    ? ReactDOM.createPortal(
      <section className="w-full max-w-sm bg-white border border-gray-400 z-50 modal-center">
        <button onClick={closeModal}>&times;</button>
        {children}
      </section>,
      document.getElementById('root')
    )
    : null
);

export default Modal;