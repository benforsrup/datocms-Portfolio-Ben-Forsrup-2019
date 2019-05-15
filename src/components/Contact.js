import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Element  } from 'react-scroll'



export default class Contact extends React.Component {
    render() {
        return (
            <StaticQuery query={graphql`
                query contactQuery {
                    contact: datoCmsContact {
                        mainText
                        email
                        number
                        
                    }
              }
            `}
                render={data => {
                        const { contact } = data
                        return(
                            <div className="contact_container">
                                <div className="contact_content">
                                    <div className="contact_text">
                                    <Element name="contact"> <h1> {contact.mainText} </h1> </Element> 
                                     <div className="contact_social">
                                         <p>{contact.email}</p>
                                         <p>{contact.number}</p> 
                                         <a  className="contact_button">Download CV</a> 
                                     </div> 
                                    </div>
                            </div>
                        </div>
                        )    
                }}
            />

        )
    }
}