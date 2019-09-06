import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

// const ImageSecondary = styled.div` flex: 1 0 50%; `;
const Container = styled(Link)`
  flex: 1 0 ${props => props.primary ? `100%` : `50%`};
  overflow: hidden;
  position: relative;
  color: ${props => props.theme.whiteish};
  background: ${props => props.theme.blackish};
  border: 1px solid ${props => props.theme.blackish};
  height: 40%;
  max-height: 500px;
`;
const StyledImage = styled(Img)`
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: transform 300ms, opacity 300ms;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;
const TextBox = styled.div`
  pointer-events: none;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: ${props => props.theme.vrt.sm};
`;
const TextCommonStyles = css`
  color: ${props => props.theme.whiteish};
  z-index: 3;
  text-shadow: 1px 1px 1px ${props => props.theme.blackish},
              0px 0px 10px #000;
`;
const LinkTitle = styled.h2`
  ${TextCommonStyles}
  font-size: ${props => props.primary ? props.theme.fsz.h2.remStr : props.theme.fsz.h4.remStr};
  letter-spacing: ${props => props.primary ? '1px' : 'normal'};
`;
const LinkSubtitle = styled.h3`
  ${TextCommonStyles}
  font-family: ${props => props.theme.bodyFont};
  font-size: ${props => props.theme.fsz.h5.remStr};
`;
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// eslint-disable-next-line
const LandingPageArticleLink = ({ picSrc, alt, title, subtitle, primary }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: {fluid: {originalName: {regex: "/Land/i"}}}) {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const targetImage = data.allImageSharp.nodes.find(
    imgNode => imgNode.fluid.originalName === picSrc
  );
  if (!targetImage) {
    return null;
  }
  return (
    <Container to='/' primary={primary}>
      <StyledImage
        alt={alt}
        fluid={targetImage.fluid}
        title={title}
      />
      <TextBox primary={primary}>
        <LinkTitle primary={primary}>{title}</LinkTitle>
        <LinkSubtitle>{subtitle}</LinkSubtitle>
      </TextBox>
    </Container>);
};

LandingPageArticleLink.propTypes = {
  picSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primary: PropTypes.bool.isOptional
};
export default LandingPageArticleLink;

export const fluidImageFragment = graphql`
      fragment fluidImageFragment on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      `;

export const pageQuery = graphql`
      query {
        imageOne: file(relativePath: { eq: "one.jpg" }) {
          ...fluidImage
        }
        imageTwo: file(relativePath: { eq: "two.jpg" }) {
          ...fluidImage
        }
      }
      `;

      // <Image
      //   fluid={image}
      //   style={{ position: `fixed` }}
      //   backgroundColor={imageBackgroundColor ? imageBackgroundColor : false}
      //   title={imageTitle}
      // />