import React from "react";
import styled from "styled-components";

import SidebarCard from './SidebarCard';

const TheSidebar = styled.aside`
  z-index: 222;
  padding: ${props => props.theme.vrt.xxs};
  min-width: 200px;
  flex: 0 0 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${props => props.theme.base};
  box-shadow: 4px 0px 2px -2px rgba(0,0,0,0.25);
`;

const Sidebar = () => (
  <TheSidebar>
    <SidebarCard />
  </TheSidebar>
);

export default Sidebar;
