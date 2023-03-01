import './Home.scss'
import logo from "../Component/Nav/svg/logo-color.svg"
import Row from "../Component/Row/Row.jsx"
import React, { useState, useEffect } from 'react';
import axios from "axios"
const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://api.themoviedb.org/3";
const PopularMovies="popular";
const TopRatedMovies="top_rated";
const UpcomingMovies="upcoming";
 const imgUrl="https://image.tmdb.org/t/p/original";
import {MovieApi,BannerApi} from '../Component/AxiosApi';
import Banner from "../Component/Banner/Banner.jsx";

const Home = () => {
	
	

	const upcoming =MovieApi();
	const Popular =MovieApi();
	
	const TopRated=MovieApi();


	const TopRatedBanner=BannerApi(TopRatedMovies);


    return (
       <section className="home">
     <Banner BannerType={TopRatedBanner}/>

          <Row title={"Popular Movies"} arr={Popular}/>
          <Row title={"Top Rated"} arr={TopRated}/>
          <Row title={"UpComing"}arr={upcoming}/>
         

        
       </section>
    )
}

export default Home
