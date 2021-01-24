import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { BreakpointUpContainer } from '../../styles/Breakpoints';

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <div>
          <Logo to="/" altText="test code" />
        </div>
        <NavList>
          <li>
           <NavLink to="/somelink">Test Link</NavLink>
          </li>
        </NavList>
      </Nav>
    </Header>
  )
}

export default Navbar

// styles 
const Header = styled.header.attrs({ className: 'navbar'})`
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 3px rgba(11, 11, 11, 0.15);
`;

const Nav = styled.nav.attrs({ className: 'navbar__container'})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
  min-height: 60px;

  ${BreakpointUpContainer} {
    max-width: 1028px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;

  >li {
    &:not(:first-child) {
      padding-left: 15px;
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 7px 20px;
  font-weight: 300;
  font-size: 18px;
  text-decoration: none;
`;



