import React, { useState, useEffect } from 'react';
import './Banner.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BannerApi, BannerTvShowApi, HomeBannerApi } from '../AxiosApi';
import { Link, useLocation } from 'react-router-dom';

function Banner() {
  const location = useLocation(); // get the current route

  let bannerData = [];

  if (location.pathname === '/TvShows') {
    bannerData = BannerTvShowApi();
  } else if (location.pathname === '/') {
    bannerData = HomeBannerApi();
  } else {
    bannerData = BannerApi();
  }

  return (
    <>
      <div className='poster'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {bannerData.map((movie) => (
            <Link
              to={{ pathname: '/MovieMain/', state: { tvShow: movie } }}
              key={movie.id}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div className='posterImage'>
                <img
                  src={`${movie && movie.backdrop_path}`}
                  alt={movie ? movie.name || movie.title : ''}
                />
              </div>
              <div className='posterImage__overlay'>
                <div className='posterImage__title'>
                  {movie ? movie.name || movie.title : ''}
                </div>
                <div className='posterImage__runtime'>
                  {movie ? movie.release_date : ''}
                  <span className='posterImage__rating'>
                    {movie ? movie.vote_average : ''}
                    <i className='fas fa-star' />{' '}
                  </span>
                </div>
                <div className='posterImage__description'>
                  {movie ? movie.overview : ''}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
