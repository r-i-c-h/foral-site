import React from "react";
import styled from "styled-components";

import SidebarCard from './SidebarCard';

const TheSidebar = styled.aside`
  z-index: 222;
  padding: 0.8em;
  min-width: 200px;
  flex: 0 0 20%;
  background: ${props => props.theme.base};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 4px 0px 2px -2px rgba(0,0,0,0.25)

`;

const Sidebar = () => (
  <TheSidebar>
    <SidebarCard />
  </TheSidebar>
);

export default Sidebar;