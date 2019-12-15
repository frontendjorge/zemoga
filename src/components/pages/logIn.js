import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LogInPage extends Component {


    render() {
        return (
            <div id="¡LogInPage" className="login-page">
               <div className="row nomargin blank-page">                 
                        <h1>LogIn Page</h1>
                        <Link to="/">Go Back</Link>                        
                </div>             
            </div>
        )
    }
}

export default LogInPage;