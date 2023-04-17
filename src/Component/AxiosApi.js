import axios from "axios";
import React, { useState, useEffect } from 'react';

const url = "https://the-stream-backend.vercel.app";

export const BannerApi = () => {
  const [Banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res= await axios.get(`${url}/movie`);
      const randomIndex = Math.floor(Math.random() * res.data.length);
      setBanner(res.data.slice(randomIndex, randomIndex + 10));
    };
    fetchData();
  }, []);
  return Banner;
};

export const BannerTvShowApi = () => {
  const [Banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${url}/tvShow`);
      const randomIndex = Math.floor(Math.random() * data.length);
      setBanner(data.slice(randomIndex, randomIndex + 10));
    };
    fetchData();
  }, []);
  return Banner;
};

export const HomeBannerApi = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesRes = await axios.get(`${url}/movie`);
      const tvShowsRes = await axios.get(`${url}/tvShow`);

      const moviesData = moviesRes.data;
      const tvShowsData = tvShowsRes.data;

      // Combine the movie and TV show data
      const combinedData = [...moviesData, ...tvShowsData];

      // Shuffle the combined data array
      for (let i = combinedData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinedData[i], combinedData[j]] = [combinedData[j], combinedData[i]];
      }

      // Slice the shuffled array to get the desired number of items
      const slicedData = combinedData.slice(0, 10);

      setBannerData(slicedData);
    };

    fetchData();
  }, []);

  return bannerData;
};


export const BannerAnimeApi = () => {
  const [Banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${url}/anime`);
      setBanner(data.slice(0,10));
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
	