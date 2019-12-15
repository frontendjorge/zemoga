import React, { Component } from 'react'
import { STATIC_PATH } from '../../config'
import getItems from '../utilities/gateway'


class PreviousRulingsModule extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            previousRulings: [],
            votesUp:1,
            votesDown:1,
            initialUpPerc: 0,
            initialDownPerc: 0,
        }
        this.loadPreviousRulings = this.loadPreviousRulings.bind(this);
        this.voteNow = this.voteNow.bind(this);
             
    }
    
    
    componentDidMount() {
        this.loadPreviousRulings();
    }

    loadPreviousRulings() {

        const data = {}

        getItems(`/previousRulings.json`, data).then(res => {
            //console.log(res);
            const previousRulings = res.data;
            this.setState({ 
                previousRulings,
                initialUpVote: 0,
                initialDownVote: 0
            });
        })
    }

    voteUp(item) {

       


    }

    voteDown(item) {
        
       
    }

    totalVotes(total, num) {
        
    }

    voteNow(item, id) {

        console.log(id)

        
    }

    voteAgain(item){
        const getContainerVotes = document.querySelector("#previousRuling-" + item.id + " .votes-ruling");
        const getContainerVotesAgain = document.querySelector("#previousRuling-" + item.id + " .votes-ruling-again");
        getContainerVotes.classList.remove("hide");
        getContainerVotesAgain.classList.add("hide");
    }

    render() {
        return (
            <div id="PreviousRulingsModule" className="previous-rulings-module">
                <div className="row nomargin">   
                    <h3>Previous Rulings</h3>              
                    <div className="container-rulings">
                    { this.state.previousRulings.map(ruling => {
                            return(
                                <div id={"previousRuling-"+ruling.id} data-id={ruling.id} key={ruling.id} className="item-ruling col-xs-12 col-sm-6 col-md-6 col-lg-6 nopadding">
                                    <div className="ruling-inner">
                                        <div className="ruling-image">
                                             <img className="img-responsive center-block" src={STATIC_PATH + "/rulings/" + ruling.thumbImage } alt={ruling.name} />
                                        </div>
                                        <div className="ruling-content">
                                            <div className="states-ruling-container">
                                                <div className="state-ruling default-state-vote">OK</div>
                                                <div className="name-ruling">{ruling.name}</div>
                                                <div className="date-ruling"><span>{ruling.time + " month ago "}</span>{"in "+ruling.category}</div>
                                                
                                            </div>
                                            <div className="description-ruling">{ruling.rule}</div>
                                            <div className="votes-ruling">
                                                <div className="vote-up" onClick={() => this.voteUp(ruling)}>Ok</div>
                                                <div className="vote-down" onClick={() => this.voteDown(ruling)}>Bad</div>
                                                <div className="vote-box-action vote-now" onClick={() => this.voteNow(ruling, ruling.id)}>Vote Now</div>
                                            </div>
                                            <div className="votes-ruling-again hide">
                                                <div className="vote-again" onClick={() => this.voteAgain(ruling)}>Vote Again</div>
                                            </div>
                                            <div className="votes-ruling-total">
                                                <div className="bar-total-up bar-total"><span>{this.state.initialUpPerc}</span>%</div>
                                                <div className="bar-total-down bar-total text-right"><span>{this.state.initialDownPerc + "%"}</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                    })
                    }  
                    </div>                     
                </div>                
            </div>
        )
    }
}

export default PreviousRulingsModule;