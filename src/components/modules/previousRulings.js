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
                previousRulings
            });
        })
    }

    voteUp = (item, id) => {
        const rulignBox = document.getElementById(id);
        let cnt = 1;
        if(rulignBox){
            rulignBox.querySelector('.vote-up').classList.add('vote-active');
            rulignBox.querySelector('.vote-down').classList.remove('vote-active');
            cnt = cnt++;
            localStorage.setItem("voteRulignUp-"+id, cnt);
            const getCurrentVoteDown = localStorage.getItem("voteRulignDown-"+id);
            const removeUpVote = getCurrentVoteDown - 1;
            localStorage.setItem("voteRulignDown-"+id, removeUpVote);
            rulignBox.querySelector(".vote-up").classList.add("disabled");
            rulignBox.querySelector(".vote-down").classList.remove("disabled");
            rulignBox.querySelector(".vote-now").classList.remove("disabled");
        }
        
    }

   

    voteDown= (item, id) => {
        const rulignBox = document.getElementById(id);
        let cnt = 1;
        if(rulignBox){
            rulignBox.querySelector('.vote-up').classList.remove('vote-active');
            rulignBox.querySelector('.vote-down').classList.add('vote-active');
            cnt = cnt++;
            localStorage.setItem("voteRulignDown-"+id, cnt);
            const getCurrentVoteUP = localStorage.getItem("voteRulignUp-"+id);
            const removeUpVote = getCurrentVoteUP - 1;
            localStorage.setItem("voteRulignUp-"+id, removeUpVote);
            rulignBox.querySelector(".vote-down").classList.add("disabled");
            rulignBox.querySelector(".vote-up").classList.remove("disabled");
            rulignBox.querySelector(".vote-now").classList.remove("disabled");
        }
       
    }

    totalVotes = (total, num) => {
        
    }

 

    voteNow = (item, id) => {
        //console.log("this is box " +id)

        const getCurrentVoteUp = localStorage.getItem("voteRulignUp-"+id).replace("-","");
        const getCurrentVoteDown = localStorage.getItem("voteRulignDown-"+id).replace("-","");

        var totalPercent = 50;

        localStorage.setItem("totalVotesRulignUp-"+id, totalPercent + parseInt(getCurrentVoteDown) - getCurrentVoteUp);
        localStorage.setItem("totalVotesRulignDown-"+id, totalPercent + parseInt(getCurrentVoteUp) - getCurrentVoteDown);
        const getNewRulignUp = localStorage.getItem("totalVotesRulignUp-"+id);
        const getNewRulignDown = localStorage.getItem("totalVotesRulignDown-"+id);

        const rulignBox = document.getElementById(id);
        if(rulignBox){
            rulignBox.querySelector('.votes-ruling').classList.add('hide');
            rulignBox.querySelector('.votes-ruling-again').classList.remove('hide');
            rulignBox.querySelector('.bar-total-up span').innerHTML =  getNewRulignUp + "%";
            rulignBox.querySelector('.bar-total-down span').innerHTML = getNewRulignDown + "%";
            rulignBox.querySelector('.bar-total-up').style.width = getNewRulignUp + "%";
            rulignBox.querySelector('.bar-total-down').style.width = getNewRulignDown + "%";
            rulignBox.querySelector(".bar-total-up").classList.add("scale-width");
            rulignBox.querySelector(".bar-total-down").classList.add("scale-width");
            rulignBox.querySelector(".bar-total-up span").classList.add("tracking-in-expand");
            rulignBox.querySelector(".bar-total-down span").classList.add("tracking-in-expand");

        }     
    }

    voteAgain(item, id){
        const rulignBox = document.getElementById(id);
        if(rulignBox){
            rulignBox.querySelector('.votes-ruling').classList.remove('hide');
            rulignBox.querySelector('.votes-ruling-again').classList.add('hide');
            rulignBox.querySelector('.vote-up').classList.remove('vote-active', 'disabled');
            rulignBox.querySelector('.vote-down').classList.remove('vote-active', 'disabled');
            rulignBox.querySelector(".bar-total-up").classList.remove("scale-width");
            rulignBox.querySelector(".bar-total-down").classList.remove("scale-width");
            rulignBox.querySelector(".bar-total-up span").classList.remove("tracking-in-expand");
            rulignBox.querySelector(".bar-total-down span").classList.remove("tracking-in-expand");
            rulignBox.querySelector(".vote-now").classList.add("disabled");
        }  
      
    }

    render() {
        return (
            <div id="PreviousRulingsModule" className="previous-rulings-module">
                <div className="row nomargin">   
                    <h3>Previous Rulings</h3>              
                    <div className="container-rulings">
                    { this.state.previousRulings.map(ruling => {
                            return(
                                <div id={ruling.id} data-id={ruling.id} key={ruling.id} className="item-ruling col-xs-12 col-sm-6 col-md-6 col-lg-6 nopadding">
                                    <div className="ruling-inner">
                                        <div className="ruling-image">
                                             <img className="img-responsive center-block" src={STATIC_PATH + "/rulings/" + ruling.thumbImage } alt={ruling.name} />
                                        </div>
                                        <div className="ruling-content">
                                            <div className="states-ruling-container">
                                                <div className="state-ruling default-state-vote">OK</div>
                                                <div className="name-ruling">{ruling.name}</div>
                                                <div className="date-ruling"><span>{ruling.time + " months ago "}</span>{"in "+ruling.category}</div>
                                                
                                            </div>
                                            <div className="description-ruling">{ruling.rule}</div>
                                            <div className="votes-ruling">
                                                <div className="vote-up" data-voteup="0" onClick={() => this.voteUp(ruling, ruling.id)}>Ok</div>
                                                <div className="vote-down" data-votedown="0" onClick={() => this.voteDown(ruling, ruling.id)}>Bad</div>
                                                <div className="vote-box-action vote-now disabled" onClick={() => this.voteNow(ruling, ruling.id)}>Vote Now</div>
                                            </div>
                                            <div className="votes-ruling-again hide">
                                                <div className="vote-again" onClick={() => this.voteAgain(ruling, ruling.id)}>Vote Again</div>
                                            </div>
                                            <div className="votes-ruling-total">
                                            {localStorage.getItem("totalVotesRulignUp-"+ruling.id) ? (
                                            <div>
                                                <div className="bar-total-up bar-total" style={{width: localStorage.getItem("totalVotesRulignUp-"+ruling.id)+'%'}}><span>{localStorage.getItem("totalVotesRulignUp-"+ruling.id)}%</span></div>
                                                <div className="bar-total-down bar-total text-right" style={{width: localStorage.getItem("totalVotesRulignDown-"+ruling.id)+'%'}}><span>{localStorage.getItem("totalVotesRulignDown-"+ruling.id)}%</span></div>
                                            </div>
                                            ) : (
                                            <div>
                                                <div className="bar-total-up bar-total"><span>0%</span></div>
                                                <div className="bar-total-down bar-total text-right"><span>0%</span></div>
                                            </div>
                                            )}
                                               
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