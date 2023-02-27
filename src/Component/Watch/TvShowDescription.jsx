import React from 'react';
import './Moviedescription.scss';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const TvShowDescription = () => {
  const location = useLocation();
  const { tvShow } = location.state;
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/MovieMain');
  };

  return (
    <div className='Moviedescription'>
      <h1>{tvShow.title}</h1>
      <h className='date'>{tvShow.first_air_date}</h>
      <p className='Dec_pera'>{tvShow.overview}</p>
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

export default TvShowDescription;
