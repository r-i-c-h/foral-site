import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 2px;
  box-shadow: 0px 1px 4px 0px ${props => props.theme.gray};
  /* box-shadow: 0 1px 2px 0 rgba(71,84,97,0.3); */
  background: ${props => props.theme.base};
  /* height: 75%; */
  /* padding: 1em; */
  padding: 78px 25px 25px;
  margin-top: -75px;
`;

const SidebarCard = () => {
  return (
    <Card>
      <p>Alisa Szatrowski is a mixed-methods researcher with a PhD in Sociology. She utilizes quantitative and qualitative methods
      to help organizations better understand and fully engage the diverse populations they serve. She knows firsthand that when
      organizations fully understand the complex and varied needs of their clients, they can create smarter, better designs that
      radically change the human experience.</p>
    </Card>
  );
};
export default SidebarCard;