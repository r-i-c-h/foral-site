import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import SEOMetaBlock from "./SEOMetaBlock";
import Header from "./Header";
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

// ".HolyGrail-content" - Moved to LandingPageArticlesGrid
// const MainContent = styled.main`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: ${props => props.theme.whiteish};
// `;

const Layout = ({ children, pageTitle }) => {
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
        <SEOMetaBlock title={pageTitle} />
        <PageWrapperOutterFrame>
          <Header siteTitle={siteMetadata.title} />

          <PageWrapper>
            {children}
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
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string
};

export default Layout;