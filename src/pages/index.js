import React from "react";
import Layout from "../components/layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Landing socialProfiles={data.allDatoCmsSocialProfile} />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`;
