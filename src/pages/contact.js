/* eslint-disable */
import React from "react";
import styled from 'styled-components';
import Layout from "../components/layout";
// import { useStaticQuery, graphql } from "gatsby";

const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${ props => props.theme.maximumWidth};
  margin: ${ props => props.theme.vrt.lg};
  align-items: center;
  & a {
    color: ${props => props.theme.charcoal};
    font-style: oblique;
  }
  & span {
    text-decoration: underline;
    margin: 0.05em;
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <ContactContainer>
        <h1>Contact:</h1>
        <h2>Feel free to email me at <a href="mailto:aszatrowski@gmail.com?subject=Contact%20from%20aszatrowski.com"><span>aszatrowski</span>@<span>gmail.com </span></a></h2>
        <h3><del>If you prefer, you may use the form below...</del>😃😅</h3>
      </ContactContainer>
    </Layout>
  );
}

export default ContactPage;