import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for navigation
export const Nav = styled.nav`
  background: #2F3C7E;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #FBEAEB;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #408EC6;
  }

  &:hover {
    background-color: #408EC6; /* Background color on hover */
    padding: 0.7rem 1rem; /* Adjust padding on hover */
    border-radius: 8px; /* Add some rounded corners */
  }
`;

export const Bars = styled(FaBars)` 
  display: none; 
  color: #808080; 
  @media screen and (max-width: 768px) { 
    display: block; 
    position: absolute; 
    top: 0; 
    right: 0; 
    transform: translate(-100%, 75%); 
    font-size: 1.8rem; 
    cursor: pointer; 
  } 
`; 

export const NavMenu = styled.div` 
  display: flex; 
  align-items: center; 
  margin-right: -24px; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`; 

export const NavBtn = styled.nav` 
  display: flex; 
  align-items: center; 
  margin-right: 24px; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`; 

export const NavBtnLink = styled(Link)` 
  border-radius: 4px; 
  background: #808080; 
  padding: 10px 22px; 
  color: #000000; 
  outline: none; 
  border: none; 
  cursor: pointer; 
  transition: all 0.2s ease-in-out; 
  text-decoration: none; 
  margin-left: 24px; 
  &:hover { 
    transition: all 0.2s ease-in-out; 
    background: #fff; 
    color: #808080; 
  } 
`;