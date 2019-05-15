import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Element  } from 'react-scroll'



export default class Contact extends React.Component {
    render() {
        return (
            <StaticQuery query={graphql`
                query contactQuery {
                    contact:datoCmsAboutPage {
                        title
                        subtitle
                        bio
                      }
                }
            `}
                render={data => {
                        const { contact } = data
                        return(
                            <div className="about_container">
                            <div className="about_content">
                                <div className="about_text">
                                   <Element name="contact"> <h1> {contact.title} </h1> </Element> 
                                    <h2>{contact.subtitle}</h2>
                                    <p >{contact.bio}</p>
                            </div>
                            </div>
                        </div>
                        )    
                }}
            />

        )
    }
}