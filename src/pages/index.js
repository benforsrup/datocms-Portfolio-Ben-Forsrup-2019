import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';



const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
