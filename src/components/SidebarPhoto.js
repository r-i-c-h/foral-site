import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const ProfilePic = styled(Img)`
  object-fit:cover;
  width:150px;
  height:150px;
  border-radius: 50%;
  border: 10px solid transparent;
  z-index: 112;
  vertical-align:middle;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
`;

const FakeCutBackground = styled.div`
  content:"";
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  top:75px; /* 150px/2 */
  height: 84px; /** 160/2 + 2perside */
  width:160px;
  background:${props => props.theme.base};
  box-shadow:inset 0px 1px 4px 0px ${props => props.theme.gray};
  border-bottom-left-radius:160px;
  border-bottom-right-radius:160px;
`;
const FakeCutShadowCover = styled.div`
  content:"";
  position:absolute;
  width:158px;
  height:8px;
  top:72px;
  left:50%;
  transform:translateX(-50%);
  background:${props => props.theme.base};
  border-radius: 8px;
`;

const SidebarImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Headshot.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
            originalName
            aspectRatio
          }
        }
      }
    }
  `);

  return <ProfilePic fixed={data.file.childImageSharp.fixed} />;
};

const Sidebar = () => (
  <>
    <FakeCutBackground />
    <FakeCutShadowCover />
    <SidebarImg />
  </>
);

export default Sidebar;