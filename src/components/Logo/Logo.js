import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Logo = ({ to, altText}) => {
  return (
    <SiteBrand
      to={to}
    >
      <svg width="38" height="52" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>{altText}</title>
       <path fillRule="evenodd" clipRule="evenodd" d="M0.513672 8.36719V12.4932H3.58984V24.2119C3.58984 26.5231 3.70378 28.1507 3.93164 29.0947C4.15951 30.0387 4.71289 30.8281 5.5918 31.4629C6.4707 32.0814 7.61816 32.3906 9.03418 32.3906C10.2223 32.3906 11.4105 32.179 12.5986 31.7559V27.5322C11.7686 27.8577 10.9222 28.0205 10.0596 28.0205C9.24577 28.0205 8.73307 27.8089 8.52148 27.3857C8.32617 26.9463 8.22852 25.807 8.22852 23.9678V12.4932H12.5986V8.36719H8.22852V0.481445L3.58984 4.72949V8.36719H0.513672ZM12.6631 21.4932V47.4697H8.3418V51.5957H21.8916V47.4697H17.3018V38.0703C19.7106 40.4792 22.4775 41.6836 25.6025 41.6836C28.6136 41.6836 31.2992 40.5768 33.6592 38.3633C36.0192 36.1497 37.1992 33.1305 37.1992 29.3057C37.1992 25.6598 36.1087 22.6976 33.9277 20.4189C31.763 18.1403 29.0205 17.001 25.7002 17.001C22.4124 17.001 19.613 18.36 17.3018 21.0781V17.3672H8.68359V21.4932H12.6631ZM18.0342 33.2607C17.4971 32.0726 17.2285 30.8275 17.2285 29.5254C17.2285 26.9863 18.0016 24.9518 19.5479 23.4219C21.1104 21.8757 22.917 21.1025 24.9678 21.1025C26.8883 21.1025 28.5973 21.8105 30.0947 23.2266C31.6084 24.6426 32.3652 26.612 32.3652 29.1348C32.3652 31.7227 31.641 33.7572 30.1924 35.2383C28.7601 36.7194 26.9372 37.46 24.7236 37.46C23.1449 37.46 21.7695 37.0612 20.5977 36.2637C19.4258 35.4499 18.5713 34.4489 18.0342 33.2607Z" fill="#00C49F"/>
      </svg>
    </SiteBrand>
  )
}

export default Logo;

// styles

const SiteBrand = styled(Link)`
  display: block;
  margin-right: 5px;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
  text-decoration: none;
`