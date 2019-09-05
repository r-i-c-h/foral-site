import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
// import { Link } from "gatsby";
import LandingPageArticleLink from "./LandingPageArticleLink";

// ".HolyGrail-content"
const LinksContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: ${props => props.theme.base};
  max-width: 75%;
`;

const LandingPageArticlesGrid = () => (
  <LinksContainer>
    <LandingPageArticleLink
      main
      src="LandingPage-Main_topcrop.jpg"
      alt="Graduation hats thrown in the air"
      title="Pathways to Graduation and Beyond"
      subtitle="Practices from two high schools for low-income students"
    />
    <LandingPageArticleLink
      src="LandingPage-DNA.jpg"
      alt="A DNA Helix"
      title="Life-course poverty & mid-life health"
      subtitle="Examining the impacts of childhood and adult poverty"
    />
    <LandingPageArticleLink
      src="LandingPage-Fence.jpg"
      alt="Fence with razor-wire top"
      title="Mental Health in the House of Corrections"
      subtitle="Evaluating the adequacy of care in NY State Prisons"
    />
  </LinksContainer>
);
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <Image />
//   <Link to="/page-2/">Go to page 2</Link>

export default LandingPageArticlesGrid;