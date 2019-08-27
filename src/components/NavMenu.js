import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SiteNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
  color: ${props => props.theme.whiteish};
  background-color: ${props => props.theme.gray};
  border-top: 1px solid ${props => props.theme.blackish};
  border-bottom: 1px solid ${props => props.theme.blackish};
  box-shadow: 0 3px 9px ${props => props.theme.gray};
`;

const StyledLink = styled(Link)`
  width: 100%;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  letter-spacing: 1px;
  background: ${props => props.theme.gray};
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  position: relative;
  transition: color 300ms;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.base};
    transform: scaleX(0);
    transform-origin: 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover, &:focus {
    color: ${props => props.theme.charcoal};

  }
  &:hover:before, &:focus:before, &:active:before {
    transform: scaleX(0.8);
  }
`;


const NavMenu = () => (
  <SiteNav>
    <StyledLink to='/'>Home</StyledLink>
    <StyledLink to='/'>Articles</StyledLink>
    <StyledLink to='/'>About</StyledLink>
    <StyledLink to='/'>Contact</StyledLink>
  </SiteNav>
);

export default NavMenu;