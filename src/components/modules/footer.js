import React, { Component } from 'react'

class Footer extends Component {


    render() {
        return (
            <div id="footer" className="section-footer">
                <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 nopadding">
                    <ul>
                        <li><a href="#1">Terms and Conditions</a></li>
                        <li><a href="#2">Privacy Policy</a></li>
                        <li><a href="#3">Contact Us</a></li>
                    </ul>
                </div> 
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 nopadding">
                    <div className="follow-cont">
                        <a className="item-footer item-tw" href="#5">TW</a>
                        <a className="item-footer item-fb" href="#4">FA</a>
                        <span className="item-footer item-text">Follow Us</span>
                    </div>
                </div>                
                                       
                              
            </div>
        )
    }
}

export default Footer;