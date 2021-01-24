import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import theme from '../../../styles/theme';

const Button = ({  
  children,
  appearance,
  textSize,
  textColor,
  type,
  ...props }) => {
  return (
    <ButtonElement
      appearance={appearance}
      textSize={textSize}
      textColor={textColor}
      type={type}
      {...props}
    >
      {children}
    </ButtonElement>
  );
}

export default Button;

Button.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  textSize: PropTypes.number,
  textColor: PropTypes.string,
  type:  PropTypes.string,
};

const ButtonElement = styled.button.attrs(props => ({
  className: 'style-button',
  type: props.type || 'button',
  textColor: props.textColor || 'white',
  textSize: props.textSize || '16',
}))`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1.5;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 400;
  font-size: ${props => props.textSize}px;
  padding: 9px 18px;
  transition: all 300ms ease 0ms;
 
  ${({ appearance }) => appearance === 'primary' && css`
    color: ${props => props.textColor};
    border: 1px solid ${theme.primary};
    background-color: ${theme.primary};

    &:hover,
    &:focus {
     
    }
  `}

  ${({ appearance }) => appearance === 'secondary' && css`
    color: ${props => props.textColor};
    border: 1px solid ${theme.secondary};
    background-color: ${theme.secondary};

    &:hover,
    &:focus {
     
    }
  `}
`