import React, { Component } from 'react'
import FeaturedBanner from '../modules/featuredBanner'
import SpeakModule from '../modules/speakout'
import PreviousRuling from '../modules/previousRulings' 
import CallToAction from '../modules/callToAction'
import Footer from '../modules/footer'

class Board extends Component {

    render() {
        return (
            <div id="home" className="main-page">

                 <FeaturedBanner/>

                <div className="col-xs-12 col-md-12 col-lg-12 col-sm-12">
                    <div className="container">
                        <SpeakModule/>
                        <PreviousRuling/>
                        <CallToAction/>
                        <Footer/>
                    </div>                   
                </div> 
                
            </div>
        )
    }
}

export default Board;