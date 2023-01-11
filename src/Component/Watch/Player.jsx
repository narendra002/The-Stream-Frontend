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
    <>
    <div className='moviecomp'>
      <div className='player-wrapper'>
       <ReactPlayer
              className='react-player'
       
            playing url ={tvShow.trailer}
              controls
				    	width='100%'
              height="400px"
              />


      {/* <video 
       className='react-player'
      width="100%" height="400px" controls>
          <source src={tvShow.trailer} type="video/mkv"
           />
           
          Your browser does not support the video tag.

      </video> */}

      
    {/* <Link to={pathname: `${movie.video}`} >


<button className="watchnow">Watch Now</button>
</Link> */}



       <div className='suggetion'>
           <div className='movieblock'>
              <img src='https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
           </div>

         
       </div>
      
      
     </div>



      

    </div>


      
       
    </>
  );
}
export default Player;