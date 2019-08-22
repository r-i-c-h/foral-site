import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FooterContainer = styled.footer`
  z-index:888;
  font-size: 8px;
  flex: none;
  padding: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: right;
  clear: both;
  background-color: ${props => props.theme.charcoal};
  color: ${props => props.theme.base};
  box-shadow: 0px -4px 2px -2px rgba(0,0,0,0.5);
`;

const SiteAttribution = styled.div`
  /* max-width: 960px; */
`;


const Footer = ({ owner, siteBy }) => (
  <FooterContainer>
    <SiteAttribution>
      Built for {owner} by
          {` `}
      <a href="https://www.richwerden.com">{siteBy}</a>
      {` `}
      &copy; {new Date().getFullYear()}
    </SiteAttribution>
  </FooterContainer>
);

Footer.propTypes = {
  owner: PropTypes.string,
  siteBy: PropTypes.string,
};

Footer.defaultProps = {
  siteBy: `R-i-c-h`,
  owner: `Someone`,
};

export default Footer;