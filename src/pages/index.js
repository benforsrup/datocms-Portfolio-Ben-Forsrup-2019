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

export default  class IndexPage extends React.Component{
  render(){
    return(
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Landing}/>    
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
