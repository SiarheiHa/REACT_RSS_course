import React from 'react';
import './Modal.scss';

function Modal(props: { onClose: () => void; isOpen: boolean; children?: React.ReactNode }) {
  const { onClose, isOpen, children } = props;

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose} data-testid="modal-overlay">
          <div
            className="modal-wrapper"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-wrapper"
          >
            <button className="btn modal-close-btn" onClick={onClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
