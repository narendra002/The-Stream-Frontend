import React from 'react';
import './Watch.scss';
import "video-react/dist/video-react.css";
// import Home from ".../Home/Home.jsx";

// import Banner from"../Banner/Banner.jsx"

import List from "./List.jsx";
import Player from "./Player.jsx";
import Moviedescription from "./Moviedescription.jsx"
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

const Watch =()=>{
  
  	const upcoming =MoviesApi(UpcomingMovies);
	const Popular =MoviesApi(PopularMovies);
	
	const TopRated=MoviesApi(TopRatedMovies);


  return (
    <>
    <div className='parentdiv'>
		<div className='watchmain'>
    
    <List/>
    <Player/>
    <Moviedescription/>

    </div>
          <Comment/>

          <Row title={"Popular Movies"} arr={Popular}/>
          <Row title={"Top Rated"} arr={TopRated}/>
          <Row title={"UpComing"} arr={upcoming}/>    
    </div>

    </>
	)
	}

export default Watch;
