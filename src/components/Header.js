import React from 'react'
import Headroom from 'react-headroom'

export default class Header extends React.Component {
    render(){
        return(
            <div>
                <Headroom>
                    <header>
                    <div className="header_container">
                        <div className="header_intent">
                            <ul className="header_list">
                                <li>About</li>
                                <li>Project</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    </header>
                </Headroom>
            </div>
        )
    }
}