import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImg = styled(Img)`
  width: 100%;
  /* height: auto;max-width: 300px;border: 10px red solid;display: block;margin: 0 auto; */
`;


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "article-1-throw_hats.jpg" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
            # presentationWidth
          }
        }
      }
    }
  `);

  return (<StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />);
};

export default Image;

// You can optionally include style info in the Styled img by including  style={{ color: "yellow", opacity: 0.5, width: "50%" }}   etc.