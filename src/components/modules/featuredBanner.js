import React, { Component } from 'react'
import MainMenu from './mainMenu'
import { STATIC_PATH } from '../../config'
import getItems from '../utilities/gateway'


class FeaturedBanner extends Component {

constructor(props) {
    super(props);
    this.state = {
        bannersFeatured: []
    }
    this.loadBanners = this.loadBanners.bind(this);       
}


componentDidMount() {
    this.loadBanners();
    let getHamburger = document.querySelector(".menu-action-mobile");
    getHamburger.addEventListener("click", this.toggleMenu);
}

loadBanners() {

    const data = {}

    getItems(`/featured.json`, data).then(res => {
        //console.log(res);
        const bannersFeatured = res.data;
        this.setState({ bannersFeatured });
    })
       
  
}

toggleMenu() {
    let getMenu = document.querySelector(".mobile-menu");
    getMenu.classList.toggle("hide");
    getMenu.classList.add("slide-in-top");
}



    render() {
        return (

                <div id="featuredBanner" className="featured-banner">
                    <div className="featured-container">
                        
                        { this.state.bannersFeatured.map(banner => {
                            const externalLink = banner.externalink;
                            return(
                                <div id={"featured-"+banner.id} key={banner.id} className="featured-image">
                                    <img className="img-responsive center-block" src={STATIC_PATH + "/" + banner.coverImage } alt={banner.name} />
                                    <div className="container">
                                    
                                    <div className="details-image-general">
                                        <div className="details-image">
                                            <div className="details-image-inner">
                                                <div className="subtitle-image">What's your opinion on</div>
                                                <h3 className="title-image">{banner.name}</h3>
                                                <p className="rule-image">{banner.rule}</p>
                                                {externalLink ? (
                                                <a className={banner.externalinkType + " external-link"} href={externalLink} target="_blank" rel="noopener noreferrer">Más Información</a>
                                                ) : (
                                                <span></span>
                                                )}  
                                                <div className="banner-footer-title">What’s Your Verdict?</div> 
                                            </div> 
                                            
                                        </div>
                                        <div className="banner-footer-actions">
                                                <div className="col-xs-6 col-md-6 col-lg-6 col-sm-6 vote-featured vote-up-featured">
                                                    <span></span>
                                                </div>
                                                <div className="col-xs-6 col-md-6 col-lg-6 col-sm-6 vote-featured vote-down-featured">
                                                    <span></span>
                                                </div>
                                        </div> 
                                    </div>
                                     
                                   
                                    </div>
                                    <div className="deadline-container">
                                        <div className="col-xs-6 col-md-4 col-lg-4 col-sm-4 deadline-title text-right">
                                            <span>CLOSING IN</span>
                                        </div>
                                        <div className="col-xs-6 col-md-8 col-lg-8 col-sm-8 deadline-days">
                                            <span>{banner.daysToClose} </span> days
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <div className="over-banner">
                        <div className="container nopadding">
                            <div className="col-xs-8 col-md-7 col-lg-7 col-sm-4">
                                <h1>Rule of Thumb.</h1>
                                <div className="menu-action-mobile hidden-md hidden-lg hidden-sm">
                                     <img className="bt-menu-mobile img-responsive" src={STATIC_PATH + "/hamburguer.png" } alt="action-menu" />
                                </div>
                            </div>
                            <div className="hidden-xs col-md-5 col-lg-5 col-sm-8">
                                <MainMenu/>
                            </div>
                            <div className="hidden-md hidden-lg hidden-sm col-xs-12 mobile-menu nopadding hide">
                                <MainMenu/>
                            </div>
                        </div>
                    </div>
                    
                </div>

           
        )
    }
}

export default FeaturedBanner;