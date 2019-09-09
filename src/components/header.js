import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
// TODO: import SVG Icon....
// import LOGO from ....
import NavMenu from './NavMenu';

const HeaderContainer = styled.header`
  width: 100%;
  z-index: 999;
  text-align: center;
  background-color: ${props => props.theme.base};
  flex: none;
  /* box-shadow: 0px 0px 2px -2px rgba(0,0,0,0.5) */
  border-top-width: ${props => props.theme.vrt.xxxs};
  border-top-color: ${props => props.theme.darker};
  border-top-style: solid;


`;
const Title = styled.h1`
  text-align: left;
  font-size: ${props => props.theme.fsz.h2.remStr};
  margin: 0 auto;
  padding-left: ${props => props.theme.vrt.xs};
  color: ${props => props.theme.charcoal};

`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>
      <Link to='/'>{siteTitle}</Link>
    </Title>
    <NavMenu />
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: `Website of Awesomeness`
};

export default Header;