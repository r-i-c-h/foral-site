import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import GlobalStyle, { themeVars } from "../styling/styling";

/* Double flexbox nesting to make things full height. #srzly? :-/ */
// ala ".HolyGrail"
const PageWrapperOutterFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.whiteish};
`;
// ala ".HolyGrail-body"
const PageWrapper = styled.div`
  flex: 1;
  display: flex;
  background: ${props => props.theme.base};
`;

// ".HolyGrail-content"
const MainContent = styled.main`
  /* flex: 1 0 auto; */
  flex: 1;
  display: flex;
  max-width: 960px;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.whiteish};

`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        buildTime(formatString: "hh:mm:ss M/DD/YY")
        siteMetadata {
          title
          author
          owner
          siteBy
        }
      }
    }
  `);
  console.log('Layoutjs BuildTime:', data.site.buildTime); //eslint-disable-line

  const { siteMetadata } = data.site;
  return (
    <ThemeProvider theme={themeVars}>
      <Fragment>
        <GlobalStyle />
        <PageWrapperOutterFrame>
          <Header siteTitle={siteMetadata.title} />

          <PageWrapper>
            <Sidebar description={siteMetadata.description} />
            <MainContent>
              {children}
            </MainContent>
          </PageWrapper>

          <Footer
            siteBy={siteMetadata.siteBy}
            owner={siteMetadata.owner}
          />
        </PageWrapperOutterFrame>
      </Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;