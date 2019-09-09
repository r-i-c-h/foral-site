import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
// import { Link } from "gatsby";
import LandingPageArticleLink from "./LandingPageArticleLink";

// ".HolyGrail-content"
const MainContainer = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  padding-top: ${props => props.theme.vrt.xxxs};
  overflow: hidden;
`;

const VerticalBox = styled.div`
  position:relative;
  flex: 1 1 50%;
  max-height: 400px;
  display: flex;
  flex-direction: row;
`;

const BottomBox = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: row;
`;

const LandingPageArticlesGrid = () => (
  <MainContainer>
    <VerticalBox>
      <LandingPageArticleLink
        primary={true}
        picSrc="LandingPage-ThrowHats.jpg"
        alt="Graduation hats thrown in the air"
        title="Pathways to Graduation and Beyond..."
        subtitle="Practices from two high schools for low-income students"
      />
    </VerticalBox>
    <VerticalBox>
      <BottomBox>
        <LandingPageArticleLink
          picSrc="LandingPage-DNA.jpg"
          alt="A DNA Helix"
          title="Life-course Poverty & Mid-Life health"
          subtitle="Examining Health impacts of childhood &amp; adult poverty"
        />
      </BottomBox>
      <BottomBox>
        <LandingPageArticleLink
          picSrc="LandingPage-Fence.jpg"
          alt="Fence with razor-wire top"
          title="Mental Health in the House of Corrections"
          subtitle="Evaluating the adequacy of care in NY State Prisons"
        />
      </BottomBox>
    </VerticalBox>
  </MainContainer>
);

//   <Link to="/page-2/">Go to page 2</Link>

export default LandingPageArticlesGrid;