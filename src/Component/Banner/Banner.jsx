import React, { useState,useEffect } from 'react';

import "./Banner.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BannerApi } from '../AxiosApi';
import { Link } from "react-router-dom";
function Banner() {

const BannerType=BannerApi();
console.log(BannerType[0]);
 return (
    <> 
    <div className='poster'>
      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
infiniteLoop={true}
showStatus={false}
>{
    BannerType.map(movie=>(  <Link to={'/MovieMain/'} state={{ tvShow: movie }} style={{textDecoration:"none", color:"white"}}>
    <div className="posterImage">
        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
    </div>
    <div className="posterImage__overlay">
        <div className="posterImage__title">{movie ? movie.title: ""}</div>
        <div className="posterImage__runtime">
            {movie ? movie.release_date : ""}
            <span className="posterImage__rating">
                {movie ? movie.vote_average :""}
                <i className="fas fa-star" />{" "}
            </span>
        </div>
        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
    </div>
</Link>
))
}
</Carousel>
    </div>
    
    </>
  )
}

export default Banner
