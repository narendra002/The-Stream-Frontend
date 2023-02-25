import React from 'react';
import ReactPlayer from "react-player";
import './Player.scss';
import Row from "../Row/Row.jsx"
import MoviesApi from '../AxiosApi';
import {Link, useLocation } from 'react-router-dom';

// import Banner from"../Banner/Banner.jsx"
const PopularMovies="popular";

const Player=()=> {
  
	const Popular =MoviesApi(PopularMovies);
  const location=useLocation();
  const { movie } = location.state;
console.log(movie);
const { tvShow } = location.state;
console.log(tvShow);

  
  return(

    <div className='moviecomp'>
      <div className='player-wrapper'>
       <ReactPlayer
              className='react-player'
       
            playing url ={tvShow.trailer}
              controls
				    	width='100%'
              height="400px"
              />


 
 </div>

       </div>
 
  );
}
export default Player;