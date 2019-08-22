import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import GlobalStyle, { styleVars } from "../styling/globals";

/* Double flexbox nesting to make things full height. #srzly? :-/ */
// ala ".HolyGrail"
const PageWrapperOutterFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.offWhite};
`;
// ala ".HolyGrail-body"
const PageWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
`;

// ".HolyGrail-content"
const MainContent = styled.main`
  flex: 1 0 auto;
  display: flex;
  max-width: 960px;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    <ThemeProvider theme={styleVars}>
      <Fragment>
        <GlobalStyle />
        <PageWrapperOutterFrame>
          <Header siteTitle={siteMetadata.title} />

          <PageWrapper>
            <Sidebar siteTitle={siteMetadata.title} description={siteMetadata.description} />
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