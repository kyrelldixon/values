import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, closeModal, open }) => (
  open
    ? ReactDOM.createPortal(
      <section className="fixed bg-white p-6" style={{ left: '25%', top: '4rem' }}>
        <button onClick={closeModal}>&times;</button>
        {children}
      </section>,
      document.getElementById('root')
    )
    : null
);

export default Modal;