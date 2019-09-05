import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Container = styled(Link)`
  flex: 1 0 ${props => props.main ? `100%` : `50%`};
  display: inline-block;
  /* position: absolute; */
  width: 100%;
  color: ${props => props.theme.whiteish};
  background: ${props => props.theme.gray};
  border: 1px solid ${props => props.theme.blackish};
`;

const StyledImage = styled(Img)`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  & > img {
    /* object-fit: cover !important; */
    /* object-position: 0% 0% !important;*/
    /* font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill */
  }
`;
// const ImageSecondary = styled.div` flex: 1 0 50%; `;
const TextBox = styled.div`
  position: relative;
  margin: ${props => props.theme.vrt.sm};
`;
const TextCommonStyles = css`
  color: ${props => props.theme.whiteish};
  z-index: 3;
`;
const LinkTitle = styled.h2`
  ${TextCommonStyles}
  font-size: ${props => props.theme.fsz.h4.remStr};
`;
const LinkSubtitle = styled.h3`
  ${TextCommonStyles}
  font-size: ${props => props.theme.fsz.h5.remStr};
`;
// eslint-disable-next-line
const LandingPageArticleLink = ({ src, alt, title, subtitle, main }) => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(
        relativePath: { regex: "/LandingPage-Main.jpg/" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 90
          ){
            ...GatsbyImageSharpFluid
            # presentationWidth
          }
        }
      }
    }
  `);
  return (<Container to='/' main={main}>
    <StyledImage
      alt={alt}
      fluid={data.coverImage.childImageSharp.fluid}
    />
    <TextBox>
      <LinkTitle>{title}</LinkTitle>
      <LinkSubtitle>{subtitle}</LinkSubtitle>
    </TextBox>
  </Container>);
};

LandingPageArticleLink.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string,
  subtitle: PropTypes.string
};
export default LandingPageArticleLink;


// <Image
//   fluid={image}
//   style={{ position: `fixed` }}
//   backgroundColor={imageBackgroundColor ? imageBackgroundColor : false}
//   title={imageTitle}
// />