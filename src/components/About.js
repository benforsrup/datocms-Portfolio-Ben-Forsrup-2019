import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const avatarStyle={
    width:150, height:150,
    borderRadius: 150,
    boxShadow:'0 4px 12px 0px black'
}

export default class About extends React.Component {
    render() {
        return (
            <StaticQuery query={graphql`
                query aboutQuery {
                    about:datoCmsAboutPage {
                        title
                        subtitle
                        bio
                      }
                }
            `}
                render={data => {
                        const { about } = data
                        return(
                            <div className="about_container">
                            <div className="about_content">
                                <div className="about_text">
                                    <h1> {about.title} </h1>
                                    <h2>{about.subtitle}</h2>
                                    <p >{about.bio}</p>
                            </div>
                            </div>
                        </div>
                        )    
                }}
            />

        )
    }
}