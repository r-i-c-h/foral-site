import React from "react";
import styled from 'styled-components';
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const AboutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${ props => props.theme.maximumWidth};
  margin-top: ${props => props.theme.vrt.lg};
  align-items: center;
  text-align: center;
  & p {
    text-align: left;
    width: 80%;
    font-size: 1.2rem;
  }
`;
const StupidGatsbyImageBoxNeedsWidth = styled(Img)`
  width: 100%;
`;
const KittyPic = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "KittyLove.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <StupidGatsbyImageBoxNeedsWidth fluid={data.file.childImageSharp.fluid} />;
};

const AboutText = () => (
  <>
    <h2>A Passion for Research &amp; Understanding</h2>
    <p>
      As a researcher, I approach real world problems with curiosity and a methodologically diverse background that allows me to employ the right tools to answer important questions. I love taking on complex issues of how organizations and systems impact human beings, figuring out how they can be improved and then helping them make changes that will broaden and strengthen their impact.
  </p>
    <p>
      One of my strengths is distilling complex technical ideas and translating them to a broad audience. I have utilized a range of methods including: ethnography, in -depth interviews, focus group interviews, survey research and quantitative analysis. My best work emerges from collaborative environments where everyone’s strengths can be employed toward a common goal. Research has taken me into schools, prisons and healthcare systems and I have been privileged to learn from mentors, colleagues, and research subjects who have generously allowed me into their lives.
  </p>
    <p>
      When not working you&#39;ll find me hiking with my dog, Kitty, or swing dancing.
  </p>
  </>
);

const AboutPage = () => {
  return (
    <Layout>
      <AboutWrapper>
        <AboutText />
        <KittyPic />
      </AboutWrapper>
    </Layout>
  );
};
export default AboutPage;