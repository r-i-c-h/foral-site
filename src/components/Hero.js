/* eslint-disable */
// Partial sauce https://github.com/ahansson89/ahansson.com/blob/master/src/components/Hero.js
import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import { slideUpAppear } from '../styling/animations';
const fadeInDelay = 500;

const HeroContainer = styled.div`
  flex: 1 0 100%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  border: 2px red solid;
  overflow: hidden;
`;
const HeroImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  /* height: ${props => props.major ? '80vh' : 'auto'}; */
  /* Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */
  & > img {
    object-fit: cover;
    object-position: 50% 50%;
    font-family: 'object-fit: 'cover'; object-position: 50% 50%;' /*IE Polyfill*/
  }
`;
const HeroTextBox = styled.div`
border: 2px green solid;
  z-index: 3;
  position: absolute;
  margin: 0px auto;
  top:50%;
  transform: translateY(-50%);
  width:80%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.vrt.xs};
  background: rgba(0,0,0,0.6);
  text-align: center;
  color: ${props => props.theme.whiteish};
  text-shadow: 1px 1px 1px ${props => props.theme.blackish};
`;
const HeroTitle = styled.h2`
  font-size: ${props => props.theme.fsz.h2.remStr};
  letter-spacing: 1px;
  line-height: 1.2;
  animation: ${ slideUpAppear} ${fadeInDelay}ms ease-in;
`;
const HeroSubtitle = styled.h3`
  font-family: ${ props => props.theme.bodyFont};
  font-size: ${ props => props.theme.fsz.h3.remStr};
  animation: ${slideUpAppear} ${fadeInDelay + 100}ms ease-in;
`;

const Hero = ({ title, subtitle, heroAlt, heroImageSrc }) => {

  return (
    <HeroContainer>
      <HeroTextBox>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroTextBox>
    </HeroContainer>
  );
}
//     <HeroImage
//       fluid={heroImage.childImageSharp.fluid}
//       alt={heroAlt}
//     />

Hero.propTypes = {
  data: PropTypes.object,
  mdx: PropTypes.node,
  frontmatter: PropTypes.node,
  title: PropTypes.string
};

export default Hero;