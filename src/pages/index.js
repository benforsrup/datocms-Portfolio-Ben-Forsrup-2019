import React from 'react'
import Layout from "../components/layout"
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { graphql } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const IndexPage = ({data}) => {
  return(
    <ThemeToggler>
        {({ theme, toggleTheme }) => (

  <Layout>
      {/* <Header /> */}
      <Landing socialProfiles={data.allDatoCmsSocialProfile} />
      <About />
      <Projects />
      <Contact />
    </Layout>)}
          </ThemeToggler>

  )
}
  



export default IndexPage

export const query = graphql`
query IndexQuery
{
  allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
    edges {
      node {
        profileType
        url
      }
    }
  }
}
`