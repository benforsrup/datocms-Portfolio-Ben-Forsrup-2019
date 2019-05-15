import React from 'react'
import Layout from "../components/layout"
import Header from '../components/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';



const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
