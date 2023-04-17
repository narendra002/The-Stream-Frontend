import axios from "axios";
import React, { useState, useEffect } from 'react';

const url = "https://the-stream-backend.vercel.app";

export const BannerApi = () => {
  const [Banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res= await axios.get(`${url}/movie`);
      setBanner(res.data.slice(0,10) );
    };
    fetchData();
  }, []);
  return Banner;
};

export const BannerTvShowApi = () => {
  const [Banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data: { results } } = await axios.get(`${url}/tvShow`);
      setBanner(results);
    };
    fetchData();
  }, []);
  return Banner;
};

export const MovieApi=(TypeMovies)=>{
	const [Movies, setMovies] = useState([]);
		useEffect(()=>{
			const fetchMovies= async() => {
				const res= await axios.get(`${url}/movie`);
				   setMovies(res.data);
				
			   
	
			
			};
			fetchMovies();
		 },[]);
		return Movies;
	
	}

export const AnimeApi = () => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    const fetchAnimes = async () => {
      const { data } = await axios.get(`${url}/anime`);
      setAnimes(data);
    };
    fetchAnimes();
  }, []);
  return animes;
};

export const TvShowApi = () => {
  const [TvShows, setTvShows] = useState([]);
  useEffect(() => {
    const fetchTvShows = async () => {
      const { data } = await axios.get(`${url}/tvShow`);
      setTvShows(data);
    };
    fetchTvShows();
  }, []);
  return TvShows;
};

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
	