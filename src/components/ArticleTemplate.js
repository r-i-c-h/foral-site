import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import Hero from './Hero';
// import Pullquote from './Pullquote';

const VerticalContainer = styled.main`
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
  const { title, subtitle, heroAlt, seoTitle } = mdx.frontmatter;
  const heroImageSrc = mdx.frontmatter.heroImage.childImageSharp.fluid.originalName;
  return (
    <Layout pageTitle={seoTitle}>
      <VerticalContainer>
        <Hero
          title={title}
          subtitle={subtitle}
          heroAlt={heroAlt}
          heroImageSrc={heroImageSrc}
        />
        <article>
          <MDXRenderer
            postInfo={mdx.frontmatter}
          >
            {mdx.body}
          </MDXRenderer>
        </article>
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
        subtitle
        pageIndex
        slugPath
        heroAlt
        seoTitle
        heroImage {
          childImageSharp {
            fluid {
              originalName
            }
          }
        }
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