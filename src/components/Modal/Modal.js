import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

import {
  BreakpointUpSmall,
  BreakpointUpMedium,
  BreakpointUpLarge,
  BreakpointUpExtraLarge
} from '../../styles/Breakpoints';
import Portal from './Portal';

const Modal = ({
  children,
  close,
  backdrop,
  // render,
  align,
  size 
}) => {
  return (
    <Portal>
      <ModalDialog align={align}>
        <ModalContent size={size}>
          <ModalHeader>
            <button onClick={close}>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M12 10.303l-8.485-8.485-1.697 1.697 8.485 8.485-8.485 8.485 1.697 1.697 8.485-8.485 8.485 8.485 1.697-1.697-8.485-8.485 8.485-8.485-1.697-1.697-8.485 8.485z"></path>
              </svg>
            </button>
          </ModalHeader>
          <ModalBody>
            {/* {render(children) || children} */}
            {children}
          </ModalBody>
        </ModalContent>
      </ModalDialog>
      {backdrop && (
        <ModalBackdrop />
      )}
    </Portal>
  );
};

export default Modal;

Modal.propTypes = {
  align: PropTypes.oneOf(['center','top',]),
  size: PropTypes.oneOf(['sm','md','lg','xl']),
  backdrop: PropTypes.bool,
};

Modal.defaultProps = {
  align: 'center',
  size: 'sm',
  backdrop: true,
};

const ModalDialog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;

  ${({ align }) => align === 'top' && css`
    padding-top: 40px;
    align-items: flex-start;
  `}
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const ModalContent = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(23, 11, 12, 0.4);

  ${BreakpointUpSmall} {
    width: 500px;
  }

  ${({ size }) => size === 'md' && css`
    ${BreakpointUpMedium} {
      width: 700px;
    }
  `}

  ${({ size }) => size === 'lg' && css`
    ${BreakpointUpLarge} {
      width: 900px;
    }
  `}

  ${({ size }) => size === 'xl' && css`
    ${BreakpointUpExtraLarge} {
      width: 1100px;
    }
  `}
`;

const ModalHeader = styled.div`
  padding: 7px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #E9EEF5;
 

  button {
    display: inline-block;
    padding: 1px 4px;
    background-color: transparent;
    border-color: transparent;
    margin-left: auto;

    svg {
      fill: #898989;
    }

    &:hover,
    &:focus {
      outline: none;
      svg {
        fill: #333;
      }
    }
  }
`;

const ModalBody = styled.div`
  padding: 12px 15px;
`;



