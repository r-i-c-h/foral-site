import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "gatsby";
import styled from "styled-components";
import Image from "../components/image";

// ".HolyGrail-content"
const MainContent = styled.main`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: ${props => props.theme.whiteish};
  max-width: 75%;
  /* height: 50%; */
  /* max-height: 50%; */
  border: 2px blue solid;
`;

const ArticleMain = styled.div`
  flex: 1 0 100%;
  background: ${props => props.theme.dark};
  border: 2px red solid;
`;

const ArticleSecondary = styled.div`
  flex: 1 0 50%;
  background: ${props => props.theme.base};
  border: 2px green solid;
`;

// const ArticlesGrid = () => {

const LandingPageArticlesGrid = () => {
  return (<MainContent>
    <ArticleMain><Image /></ArticleMain>
    <ArticleSecondary><Image /></ArticleSecondary>
    <ArticleSecondary><Image /></ArticleSecondary>
  </MainContent>);
};
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <Image />
//   <Link to="/page-2/">Go to page 2</Link>

export default LandingPageArticlesGrid;