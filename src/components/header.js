import React from 'react';
import PropTypes from 'prop-types';
// import SVG Icon....
import { Link } from 'gatsby';
import styled from 'styled-components';

import NavMenu from './NavMenu';

const HeaderContainer = styled.header`
  width: 100%;
  z-index: 999;
  text-align: center;
  background-color: ${props => props.theme.base};
  flex: none;
  box-shadow: 0px 0px 2px -2px rgba(0,0,0,0.5)

`;
const Title = styled.h1`
  /* width: 100%; */
  margin: 0 auto;
`;

const TitleLink = styled(Link)``;
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>
      <TitleLink to='/'>{siteTitle}</TitleLink>
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