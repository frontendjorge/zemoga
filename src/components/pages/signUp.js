import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUpPage extends Component {


    render() {
        return (
            <div id="SignUpPage" className="signup-page">
                <div className="row nomargin blank-page">                 
                        <h1>SignUp Page</h1>
                        <Link to="/">Go Back</Link>                        
                </div>               
            </div>
        )
    }
}

export default SignUpPage;