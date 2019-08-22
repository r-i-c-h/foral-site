import React from "react";
// import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ArticlesWrap = styled.div`
  height: 100%;
  display: flex;
`;

const ArticleMain = styled.div`
  flex: 1 0 100%;
`;

const ArticleSecondary = styled.div`
  flex: 1 0 50%;
`;
const ArticlesGrid = () => {
  <ArticlesWrap>
    <ArticleMain />
    <ArticleSecondary />
    <ArticleSecondary />
  </ArticlesWrap>;
};

export default ArticlesGrid;