import React from 'react';
import ReactPlayer from 'react-player';
import './Player.scss';
import Row from '../Row/Row.jsx';
import MoviesApi from '../AxiosApi';
import { useLocation, useNavigate } from 'react-router-dom';

const PopularMovies = 'popular';

const Player = () => {
  const Popular = MoviesApi(PopularMovies);
  const location = useLocation();
  const navigate = useNavigate();
  let tvShow = location.state?.tvShow;
  const Searchdata  = location.state;
  let movie = location.state?.movie;

 console.log(Searchdata);

  const trailerUrl = tvShow?.trailer || Searchdata?.trailer;

  return (
    <div className='moviecomp'>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={trailerUrl}
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
    </div>
  );
};

export default Player;
