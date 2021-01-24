import { useState } from "react";

  const useModal = () => {
    const [open, onOpenModal] = useState(false);
    const [close, onCloseModal] = useState(false);

    const openModal = () => {
      onOpenModal(true);
      document.body.classList.add('modal-open');
    };

    const closeModal = () => {
      onCloseModal(true);
      onOpenModal(false);
      document.body.classList.remove('modal-open');
    };

    return { open, close, openModal, closeModal };
  };

export default useModal;