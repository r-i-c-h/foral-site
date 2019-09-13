import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
// import HeroImage from './HeroImage';
// import Pullquote from './Pullquote';

const VerticalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: ${ props => props.theme.vrt.lg};
  align-items: center;
  text-align: center;
  & p {
    text-align: left;
    width: 720px;
  }
`;

export default function ArticleTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <VerticalContainer>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer
          front={mdx.frontmatter}
        >
          {mdx.body}
        </MDXRenderer>
      </VerticalContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
query ArticleQuery($id: String) {
  mdx(id: { eq: $id }) {
    id
    body
    frontmatter {
      title
    }
  }
}
`;

ArticleTemplate.propTypes = {
  data: PropTypes.object,
  mdx: PropTypes.node,
  frontmatter: PropTypes.node,
  title: PropTypes.string
};

ArticleTemplate.defaultProps = {
  title: "An Article"
};