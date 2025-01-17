import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-auto">
                            <a href="/" className="logo">FreePixabay</a>
                        </div>
                        <div className="col-lg-8 my-auto text-right">
                            <div className="mainmenu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/disclaimer">Disclaimer</Link></li>
                                    <li><Link to="/credits">Credits</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header