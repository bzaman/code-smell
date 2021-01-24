import React, { useState }  from 'react';
import styled from 'styled-components/macro';
import Modal from '../components/Modal/Modal';
import Button from '../components/UI/Button/Button';
import useModal from '../hooks/useModal';

const Home = () => {
  const { openModal, closeModal } = useModal();
  const [modalState, setModalState] = useState({
    first: false,
    second: false,
  });

  const onOpenModal = (str) => {
    switch (str) {
      case 'first-modal':
        setModalState({...modalState, first: true});
        openModal()
        break;
      case 'second-modal':
        setModalState({...modalState, second: true});
        openModal()
        break;
      default:
       return null
    }
  }
  
  const onCloseModal = (str) => {
    switch (str) {
      case 'first-modal':
        setModalState({...modalState, first: false});
        closeModal();
        break;
      case 'second-modal':
        setModalState({...modalState, second: false});
        closeModal();
        break;
      default:
       return null
    }
  }

  const dymmy1 = (
    <div>
     <h2>1 What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )

  return (
    <>
      <DemoHome>
        <Button appearance="primary" onClick={() => onOpenModal('first-modal')}>First Modal</Button>
        <Button appearance="secondary" onClick={() => onOpenModal('second-modal')}>Second Modal</Button>
      </DemoHome>

      {modalState.first && (
        <Modal
          size="md"
          align="top"
          close={() => onCloseModal('first-modal')}
        >
          {dymmy1}
        </Modal>
      )}

      {modalState.second && (
        <Modal
          close={() => onCloseModal('second-modal')}
        >
          {dymmy1}
        </Modal>
      )}
    </>
  )
}

export default Home

const DemoHome = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto;
`;
