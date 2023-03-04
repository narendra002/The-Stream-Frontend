import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MovieMain.scss';

const MovieMain = () => {
  const location = useLocation();
  const { tvShow } = location.state;

  const navigate = useNavigate();

  const handleWatch = () => {
    navigate(`/watch/${tvShow._id}`, { state: { tvShow } });
  };

  return (
    <div className="MainMovie">
      <div className="imgandinfo">
        <div className="">
          <img className="posterImg" src={tvShow.poster_path} />
        </div>
        <img className="movie-backdrop" src={tvShow.backdrop_path} />
        <div className="movieInfo">
          <h className="MovieName">{tvShow.title}</h>
          <h className="year">{tvShow.first_air_date}</h>
          <div className="genres">
            <ul>
              <li>{tvShow.genre} </li>
            </ul>
          </div>
          <p className="decription">{tvShow.overview} </p>
          <div className="duration_imdb">
            <h>Duration :{tvShow.duration} Min </h>
          </div>
          <div className="Button">
            <button className="watchnow" onClick={handleWatch}>
              {" "}
              ▶ Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieMain;
