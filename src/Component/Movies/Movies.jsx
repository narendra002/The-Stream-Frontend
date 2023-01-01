import React from 'react'
import './Movies.scss'
import Row from "../Row/Row.jsx"
import logo from "../Nav/svg/logo-color.svg"
import Banner from"../Banner/Banner.jsx"
import {BannerApi,MoviesApi} from '../AxiosApi'
const PopularMovies="popular";
const TopRatedMovies="top_rated";
const UpcomingMovies="upcoming";
const Movies = () => {
	const upcoming =BannerApi(UpcomingMovies);
		const Popular =MoviesApi(PopularMovies);
	
    return (
        <section className="movies">
      <Banner BannerType={upcoming}/>
            
         
          <Row title={"Movies"} arr={Popular}/>
         
       </section> 
		
    )
}

export default Movies;
