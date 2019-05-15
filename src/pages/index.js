import React from 'react'
import Layout from "../components/layout"
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';



const IndexPage = ({data}) => {
  return(
  <Layout>
      <Header />
      <Landing socialProfiles={data.allDatoCmsSocialProfile} />
      <About />
      <Projects />
      <Contact />
    </Layout>
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