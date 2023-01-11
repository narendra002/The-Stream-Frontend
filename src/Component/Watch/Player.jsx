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
  
  return(
    <>
    <div className='moviecomp'>
      <div className='player-wrapper'>
       {/* <ReactPlayer
              className='react-player'
       
            playing url ='https://firebasestorage.googleapis.com/v0/b/thestream-1a744.appspot.com/o/items%2Fy2meta.com-All%20over%20in%2010%20seconds-(144p).mp4?alt=media&token=616b51f1-c646-40a7-834f-a5826cf83d91'
            light='true'
              controls
				    	// width='100%'
              // height="400px"
              /> */}


      {/* <video 
       className='react-player'
      width="100%" height="400px" controls>
          <source src={movie.video} type="video/mkv"
           />
           
          Your browser does not support the video tag.

      </video> */}

      <a href={movie.video} target="_blank" rel="noopener noreferrer">
  Go to Watch Movie
</a>
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