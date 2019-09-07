import React from "react";
import styled from "styled-components";

import SidebarCard from './SidebarCard';
import SidebarPhoto from './SidebarPhoto';

const TheSidebar = styled.aside`
  /* z-index: 222; */
  margin: ${props => props.theme.vrt.xs};
  margin-top: ${props => props.theme.vrt.lg};
  min-width: 200px;
  flex: 0 0 20%;
  position:relative;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* box-shadow: 4px 0px 2px -2px rgba(0,0,0,0.25); */
`;

const Sidebar = () => (
  <TheSidebar>
    <SidebarPhoto />
    <SidebarCard />
  </TheSidebar>
);

export default Sidebar;