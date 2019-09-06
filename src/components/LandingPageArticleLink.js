import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Container = styled(Link)`
  flex: 1 0 ${props => props.main ? `100%` : `50%`};
  overflow: hidden;
  position: relative;
  color: ${props => props.theme.whiteish};
  background: ${props => props.theme.blackish};
  /* border: 1px solid ${props => props.theme.blackish}; */
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
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

// const ImageSecondary = styled.div` flex: 1 0 50%; `;
const TextBox = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  /* word-break: keep-all; */
  transform: translate(-50%,-50%);
  text-align: center;

  padding: ${props => props.theme.vrt.sm};
`;
const TextCommonStyles = css`
  color: ${props => props.theme.whiteish};
  z-index: 3;
  text-shadow: 1px 1px 1px ${props => props.theme.blackish};
`;
const LinkTitle = styled.h2`
  ${TextCommonStyles}
  font-size: ${props => props.main ? props.theme.fsz.h2.remStr : props.theme.fsz.h4.remStr};
  letter-spacing: ${props => props.main ? '1px' : 'normal'};
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
  return (
    <Container to='/' main={main}>
      <StyledImage
        alt={alt}
        fluid={data.coverImage.childImageSharp.fluid}
        title={title}
      />
      <TextBox main={main}>
        <LinkTitle main={main}>{title}</LinkTitle>
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