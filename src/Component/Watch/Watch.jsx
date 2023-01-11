import React from 'react';
import './Watch.scss';
import "video-react/dist/video-react.css";
// import Home from ".../Home/Home.jsx";

// import Banner from"../Banner/Banner.jsx"

import List from "./List.jsx";
import Player from "./Player.jsx";
import TvShowDescription from "./TvShowDescription.jsx"
import Comment from "./Comment.jsx"

import Row from "../Row/Row.jsx"
import axios from "axios"
const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://api.themoviedb.org/3";
const PopularMovies="popular";
const TopRatedMovies="top_rated";
const UpcomingMovies="upcoming";
 const imgUrl="https://image.tmdb.org/t/p/original";
import MoviesApi from '../AxiosApi';
import { useLocation } from 'react-router-dom';

const Watch =()=>{
  
  const location=useLocation();
  const { tvShow } = location.state;
console.log(tvShow);

  	const upcoming =MoviesApi(UpcomingMovies);
	const Popular =MoviesApi(PopularMovies);
	
	const TopRated=MoviesApi(TopRatedMovies);


  return (
    <>
    <div className='parentdiv'>
		<div className='watchmain'>
    
    <List/>
    
    <Player/>
    <TvShowDescription/>
    {/* <Moviedescription/> */}
    {/* <a href={tvShow.trailer} target="_blank" rel="noopener noreferrer">
  Go to Watch TvShow
</a> */}
    </div>
          <Comment/>

          {/* <Row title={"Popular Movies"} arr={Popular}/> */}
          {/* <Row title={"Top Rated"} arr={TopRated}/> */}
          {/* <Row title={"UpComing"} arr={upcoming}/>     */}
    </div>

    </>
	)
	}

export default Watch;