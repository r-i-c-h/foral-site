import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// import Layout from "./layout";
// import HeroImage from './HeroImage';
// import Pullquote from './Pullquote';

export default function ArticleTemplate({ data: { mdx } }) {
  return (
    <>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer
        front={mdx.frontmatter}
      >
        {mdx.body}
      </MDXRenderer>
    </>
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