import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const avatarStyle={
    width:150, height:150,
    borderRadius: 150,
    boxShadow:'0 4px 12px 0px black'
}

export default class Landing extends React.Component {
    render() {
        return (
            <StaticQuery query={graphql`
                query landingQuery {
                    landing:datoCmsHome{
                    introText
                    landingImage {
                        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                            ...GatsbyDatoCmsSizes
                        }
                    }
                }
                }
            `}
                render={data => (
                    <div className="fullpage">
                        <div className="fullpage_content">
                            <div className="fullpage_text">
                                <Img 
                                fluid={data.landing.landingImage.fluid}
                                style={avatarStyle} />
                                <p style={{fontSize:32, 
                                    fontWeight:'900', 
                                    marginTop:'1em'}}>Hello there!</p>
                                <p style={{fontSize:20, fontWeight:'600',marginTop:'.5em'}}>My name is <span style={{fontSize:32, fontWeight:'900'}}>Ben Forsrup</span></p>
                                <p style={{marginTop:'1em', fontSize:20, fontWeight:'700'}}>and I like to build nice looking stuff</p>
                                <p className="intro_text">{data.landing.introText}</p>
                                <p className="sidebar__social">
                                {this.props.socialProfiles.edges.map(({ node: profile }) => (
                                <a
                                    key={profile.profileType}
                                    href={profile.url}
                                    target="blank"
                                    className={`social social--${profile.profileType.toLowerCase()}`}
                                > </a>
                                ))}
                            </p>

                        </div>
                        </div>
                    </div>
                )}
            />

        )
    }
}