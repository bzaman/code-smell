import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  let modalRoot = document.getElementById('portals');

  if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'portals');
      document.body.appendChild(modalRoot);
  }

  const modalElement = document.createElement('div');
  modalElement.setAttribute('class', 'modal');
 

  useEffect(() => {
      modalRoot.appendChild(modalElement);
      return () => modalRoot.removeChild(modalElement);
  });

  // addBodyClass = () => {
  //   document.body.classList.add('modal-open');
  // }

  return createPortal(children, modalElement);
};

export default Portal;