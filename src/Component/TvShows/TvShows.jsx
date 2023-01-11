import React from 'react'
import './TvShow.scss'
import Row from "../Row/Row.jsx"
import {TvShowApi} from '../AxiosApi'
const PopularTvShows="popular";
import Banner from"../Banner/Banner.jsx"
import {BannerTvShowApi} from '../AxiosApi'
const PopularMovies="popular";
const TopRatedMovies="top_rated";
const UpcomingMovies="upcoming";
const TvShows = () => {
	const Popular=BannerTvShowApi(PopularTvShows);
const PopularTvShow =TvShowApi();
 console.log(PopularTvShow);
    return (    
        <section className="tv_Shows">
      <Banner BannerType={Popular}/>
            
      <Row title={"TvShow"} arr={PopularTvShow}/>
          
          
       </section>
    )
}

export default TvShows;
