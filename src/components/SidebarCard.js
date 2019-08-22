import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";

const Card = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-end; */
  box-shadow: 0px 0px 5px ${props => props.theme.gray};
  background: ${props => props.theme.base};
  /* height: 75%; */
  padding: 1em;
`;

const SidebarCard = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  return (<Card><p>{data.site.siteMetadata.description}</p></Card>
  );
};

export default SidebarCard;


SidebarCard.propTypes = {
  data: PropTypes.string,
};

SidebarCard.defaultProps = {
  data: `foo`,
};