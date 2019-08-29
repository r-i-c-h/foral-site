import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-end; */
  box-shadow: 0px 0px 5px ${props => props.theme.gray};
  background: ${props => props.theme.base};
  /* height: 75%; */
  padding: 1em;
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