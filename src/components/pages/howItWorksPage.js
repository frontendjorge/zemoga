import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HowItWorksPage extends Component {


    render() {
        return (
            <div id="pastTrials" className="past-trials-page">
                <div className="row nomargin blank-page">                 
                        <h1>How It Works Page</h1>
                        <Link to="/">Go Back</Link>                        
                </div>                 
            </div>
        )
    }
}

export default HowItWorksPage;