import React from 'react'
import Headroom from 'react-headroom'
import { Link } from 'react-scroll'




export default class Header extends React.Component {

   

    render(){
        return(
                <Headroom style={{zIndex:10}}>
                    <header>
                    <div className="header_container">
                        <div className="header_intent">
                            <ul className="header_list">
                                <Link to="about" smooth={true} duration={500}><li>About</li></Link>
                                <Link to="projects" smooth={true} duration={500}><li>Projects</li></Link>
                                <Link to="contact" smooth={true} duration={500}><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                    </header>
                </Headroom>
        )
    }
}