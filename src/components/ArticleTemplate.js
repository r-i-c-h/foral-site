import React from 'react'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout";
// import HeroImage from './HeroImage';
// import Pullquote from './Pullquote';

export default function ArticleTemplate({ data: { mdx, site } }) {
  return (
    <>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer
        front={mdx.frontmatter}
        site={site.siteMetadata}
      >
      {mdx.body}
      </MDXRenderer>
    </>
  )
}

export default Article;