import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PastTrialsPage extends Component {


    render() {
        return (
            <div id="pastTrials" className="past-trials-page">
                <div className="row nomargin blank-page">                 
                        <h1>Past Trials Page</h1>
                        <Link to="/">Go Back</Link>                        
                </div>                
            </div>
        )
    }
}

export default PastTrialsPage;