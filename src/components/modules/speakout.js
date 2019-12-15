import React, { Component } from 'react'

class speakOut extends Component {


    componentDidMount() {
        let getBox = document.querySelector(".speak-out-message");
        getBox.addEventListener("click", this.closeBox);
    }

    closeBox() {
        let getBox = document.querySelector(".speak-out-message");
        getBox.classList.add("fade-out-bck");
        setTimeout(function(){ getBox.classList.add("hide"); }, 1000);
    }

    render() {
        return (
            <div id="speakOut" className="speak-out-message">
                <div className="row nomargin">                 
                        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 ">
                            <h3>Speak out. Be heard.<br/><span>Be counted</span></h3>
                        </div> 
                        <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 nopadding">
                            <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                        </div> 
                        <div className="close-box close-speak-out"></div>        
                </div>                
            </div>
        )
    }
}

export default speakOut;