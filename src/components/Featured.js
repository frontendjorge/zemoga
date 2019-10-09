import React, { Component } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import { STATIC_PATH, APP_JSON } from '../config'



class heroComponentBanners extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannersFeatured: []
        }
        this.loadBanners = this.loadBanners.bind(this);       
    }

    componentDidMount() {
        this.loadBanners();
    }
    
    loadBanners() {
           
        axios.get(APP_JSON + `/featured.json`)
            .then(res => {
                const bannersFeatured = res.data;
                console.log(bannersFeatured);
                this.setState({ bannersFeatured });
            })
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
          };

        return (
            <div className="container-hero-banners">
                <Slider {...settings}>
                    { this.state.bannersFeatured.map(banner => {
                            const externalLink = banner.externalink;
                            return(                                
                                <div id={"featured-"+banner.id} key={banner.id} className="featured-image">
                                    <img className="img-responsive center-block featured-img" src={STATIC_PATH + "/" + banner.coverImage} alt={banner.name} />
                                    <div className="container nopadding">                                        
                                    
                                    <div className="details-image">
                                    <h3 className="title-image fade-in-right">{banner.name}</h3>
                                    <p className="rule-image">{banner.description}</p>
                                    <div className="details-image-inner">

                                    {externalLink ? (
                                    <a className={banner.externalinkType + " external-link"} href={externalLink} target="_blank" rel="noopener noreferrer">Conoce más</a>
                                    ) : (
                                    <span></span>
                                    )}  
                                    </div>                                                
                                    </div>                                       
                                   
                                    </div>
                                </div>
                               
                            )
                        }
                    )}  
                </Slider>                  
            </div>
        )
    }
}

export default heroComponentBanners;