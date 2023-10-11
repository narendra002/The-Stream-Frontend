import './Home.scss';
import logo from "../Component/Nav/svg/logo-color.svg";
import Row from "../Component/Row/Row.jsx";
import React, { useState, useEffect } from 'react';
import axios from "axios";
const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://api.themoviedb.org/3";
const PopularMovies = "popular";
const TopRatedMovies = "top_rated";
const UpcomingMovies = "upcoming";
const imgUrl = "https://image.tmdb.org/t/p/original";
import { MovieApi, BannerApi } from '../Component/AxiosApi';
import Banner from "../Component/Banner/Banner.jsx";

const Home = () => {
  const upcoming = MovieApi();
  const Popular = MovieApi();
  const TopRated = MovieApi();
  const TopRatedBanner = BannerApi(TopRatedMovies);

  return (
    <div className='ml-[5.45%] m-4'>
      <Banner />

      {/* Responsive margin top for different screen sizes */}
      <Row title={"Popular Movies"} arr={Popular} className="mt-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16" />
      <Row title={"Top Rated"} arr={TopRated} className="mt-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16" />
      <Row title={"Upcoming"} arr={upcoming} className="mt-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16" />
    </div>
  );
};

export default Home;
