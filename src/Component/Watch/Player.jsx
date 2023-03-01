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
// console.log(movie);
const { tvShow } = location.state;
// console.log(tvShow);
const Searchdata  = location.state;
  
  return(

    <div className='moviecomp'>
      <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={tvShow.trailer}
        width='100%'
        height='100%'
        controls={true}
      />


 
 </div>

       </div>
 
  );
}
export default Player;