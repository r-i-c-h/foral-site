import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
// import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import SidebarCard from './SidebarCard';

const TheSidebar = styled.aside`
  z-index: 222;
  padding: 0.8em;
  /* width: 20%; */
  flex: 0 0 20%;
  background: ${props => props.theme.base};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 4px 0px 2px -2px rgba(0,0,0,0.25)

`;

const SidebarTitle = styled.h3`
  margin-bottom: 1em;
`;

const Sidebar = ({ siteTitle, }) => (
  <TheSidebar>
    <SidebarTitle>
      <Link to="/" >
        {siteTitle}
      </Link>
    </SidebarTitle>
    <SidebarCard />
  </TheSidebar>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: ``,
};

export default Sidebar;