import React from "react";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import LandingPageArticlesGrid from "../components/LandingPageArticlesGrid";

const IndexPage = () => (
  <Layout pageTitle="Welcome">
    <Sidebar />
    <LandingPageArticlesGrid />
  </Layout>
);

export default IndexPage;