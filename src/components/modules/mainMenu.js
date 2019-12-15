import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { STATIC_PATH } from '../../config'

class MainMenu extends Component {


    render() {
        return (
                <div id="menuContainer" className="main-menu">
                    <ul className="container-list-menu">
                        <li><Link to="/past-trials">Past trials</Link></li>
                        <li><Link to="/how-it-works">How It Works</Link></li>
                        <li><Link to="/log-in">Log In</Link> / <Link to="/sign-up">Sign Up</Link></li>
                        <li className="hidden-xs">
                            <Link to="/search">
                            <span className="search-button">
                                <img className="center-block" src={STATIC_PATH + '/search-icon.png'} alt="Search Icon" />
                            </span>
                            </Link>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default MainMenu;