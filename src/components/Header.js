import React from 'react'
import Headroom from 'react-headroom'
import { Link } from 'gatsby'

export default class Header extends React.Component {
    render(){
        return(
                <Headroom style={{zIndex:10}}>
                    <header>
                    <div className="header_container">
                        <div className="header_intent">
                            <ul className="header_list">
                                <Link to="/"><li>About</li></Link>
                                <Link to="/"><li>Projects</li></Link>
                                <Link to="/"><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                    </header>
                </Headroom>
        )
    }
}