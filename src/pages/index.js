import React from "react";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";
import LandingPageArticlesGrid from "../components/LandingPageArticlesGrid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Sidebar />
    <LandingPageArticlesGrid />
  </Layout>
);

export default IndexPage;