import React from 'react'
import { StaticQuery, graphql } from "gatsby"


export default class Footer extends React.Component {
    render(){
        return(
            <StaticQuery query={graphql`
                query footerQuery {
                    footer:datoCmsHome{
                    copyright
                }
                }
            `}
            render={data => {
                return(
                  <footer>
                    <div className="footer_container">
                        <div className="footer_intent">
                            <p>{data.footer.copyright}</p>
                        </div>
                    </div>
                    </footer>  
                )
            }}
                    
           /> 
        )
    }
}