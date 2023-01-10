import axios from "axios"
const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://api.themoviedb.org/3";
const url1 = "http://127.0.0.1:4000";
import React, { useState, useEffect } from 'react';
export const BannerApi=(TypeBanner)=>{
const [Banner, setBanner] = useState([]);
	useEffect(()=>{
		const fetchData= async() => {
			const{data:{results},}=await axios.get(`${url}/movie/${TypeBanner}?api_key=${API_KEY}`);
	 
               setBanner(results[Math.floor(Math.random()*results.length-1)]);

		};
		fetchData();
	 },[]);
	return Banner;
}
export const BannerTvShowApi=(TypeBanner)=>{
const [Banner, setBanner] = useState([]);
	useEffect(()=>{
		const fetchData= async() => {
			const{data:{results},}=await axios.get(`${url}/tv/${TypeBanner}?api_key=${API_KEY}`);
	 
               setBanner(results[Math.floor(Math.random()*results.length-1)]);

		};
		fetchData();
	 },[]);
	return Banner;
}
export const MoviesApi=(TypeMovies)=>{
const [Movies, setMovies] = useState([]);
	useEffect(()=>{
		const fetchMovies= async() => {
			const{data:{results},}=await axios.get(`${url}/movie/${TypeMovies}?api_key=${API_KEY}`);
	 
               setMovies(results);
            
           

		
		};
		fetchMovies();
	 },[]);
	return Movies;

}
export const MovieApi=(TypeMovies)=>{
	const [Movies, setMovies] = useState([]);
		useEffect(()=>{
			const fetchMovies= async() => {
				const res= await axios.get(`${url1}/movie`);
				   setMovies(res.data);
				
			   
	
			
			};
			fetchMovies();
		 },[]);
		return Movies;
	
	}
export const TvShowsApi=(TypeTvShows)=>{
const [TvShows, setTvShows] = useState([]);
	useEffect(()=>{
		const fetchTvShows= async() => {
			const{data:{results},}=await axios.get(`${url}/tv/${TypeTvShows}?api_key=${API_KEY}`);
	
 setTvShows(results);
		
		};
		fetchTvShows();
	 },[]);
	return TvShows;

}

  const AxiosApi = (UpcomingMovies) => {
const [upcoming, setUpcoming] = useState([]);
	
	useEffect(()=>{
		const fetchUpcoming = async() => {
			const{data:{results},}=await axios.get(`${url}/movie/${UpcomingMovies}?api_key=${API_KEY}`);
	
 setUpcoming(results);
		
		};
		fetchUpcoming();
	 },[UpcomingMovies,setUpcoming]);
return upcoming;
}
export default AxiosApi;