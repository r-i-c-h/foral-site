import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SiteNav = styled.nav`
  width: 100%;
  color: ${props => props.theme.whiteish};
  font-weight: 700;
  background-color: ${props => props.theme.gray};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid ${props => props.theme.olive};
`;

const StyledLink = styled(Link)`
  width: 100%;
  transition: background-color 400ms, color 400ms;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  &:hover {
    background-color: ${props => props.theme.base};
    color: ${props => props.theme.charcoal};
    text-decoration: underline;
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