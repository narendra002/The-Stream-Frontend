import React from 'react';
import './Moviedescription.scss';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Moviedescription =()=>{
  const location = useLocation();
  const { tvShow } = location.state;
  const { movie } = location.state;
  // console.log(movie.desc);
  const navigate = useNavigate();
  const Searchdata  = location.state;
  const OverView = tvShow?.overview || Searchdata?.desc ||movie?.desc||Searchdata?.overview;
  const Title = tvShow?.title || Searchdata?.title||movie?.title;
  const Air = tvShow?.first_air_date || Searchdata?.first_air_date||movie?.first_air_date|| Searchdata?.releaseYear;
const genre=Searchdata?.genree;
  const navigateHome = () => {
    navigate('/MovieMain');
  };

  return (
    <div className='Moviedescription'>
      <h1>{Title}</h1>
      <h className='date'>{genre}</h>
      <h className='date'>{Air}</h>
      <p className='Dec_pera'>{OverView}</p>
      <button className='viewdetail' onClick={navigateHome}>
        View Detail
      </button>
      <div className='Reaction'>
        <div className='Exl'>
          <h className='emoji'>😃</h>
        </div>
        <div className='normal'>
          <h className='emoji'>😊</h>
        </div>
        <div className='bad'>
          <h className='emoji'>😡</h>
        </div>
      </div>
    </div>
  );
};

export default Moviedescription;
