import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {


    render() {
        return (
            <div id="SearchPage" className="search-page">
                <div className="row nomargin blank-page">                 
                        <h1>Search Page</h1>
                        <Link to="/">Go Back</Link>                        
                </div>                
            </div>
        )
    }
}

export default SearchPage;