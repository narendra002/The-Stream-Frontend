import React from 'react';
import ReactPlayer from "react-player";
import './Player.scss';
import Row from "../Row/Row.jsx"
import MoviesApi from '../AxiosApi';

// import Banner from"../Banner/Banner.jsx"
const PopularMovies="popular";

const Player=()=> {
  
	const Popular =MoviesApi(PopularMovies);

  
  return(
    <>
    <div className='moviecomp'>
      <div className='player-wrapper'>
      
         <ReactPlayer
              className='react-player'
              url="https://youtu.be/K1QICrgxTjA"
				    	width='100%'
              height="400px"/>

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