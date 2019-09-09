import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FullWidthNavContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.gray};
  opacity: 0.9;
`;
const SiteNav = styled.nav`
  margin: 0 auto;
  max-width: ${props => props.theme.maximumWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  color: ${props => props.theme.whiteish};
  background-color: ${props => props.theme.gray};
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
  &.active {
    color: ${props => props.theme.darker};
  }
  &:hover, &:focus {
    color: ${props => props.theme.charcoal};

  }
  &:hover:before, &:focus:before, &:active:before {
    transform: scaleX(1);
  }
`;


const NavMenu = () => (
  <FullWidthNavContainer>
    <SiteNav>
      <StyledLink to='/' activeClassName="active">Home</StyledLink>
      <StyledLink to='/' activeClassName="active">Articles</StyledLink>
      <StyledLink to='/about' activeClassName="active">About</StyledLink>
      <StyledLink to='/' activeClassName="active">Contact</StyledLink>
    </SiteNav>
  </FullWidthNavContainer>
);

export default NavMenu;