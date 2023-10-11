import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BannerApi, BannerTvShowApi, HomeBannerApi } from '../AxiosApi';
import { Link, useLocation } from 'react-router-dom';

function Banner() {
  const location = useLocation();
  const bannerData = getBannerData(location.pathname);

  function getBannerData(pathname) {
    switch (pathname) {
      case '/TvShows':
        return BannerTvShowApi();
      case '/':
        return HomeBannerApi();
      default:
        return BannerApi();
    }
  }

  return (
    <div className="relative  ">
      <Carousel
        showThumbs={false}
        autoPlay={false}
        transitionTime={3000}
        infiniteLoop={false}
        showStatus={false}
        className="w-full"
      >
        {bannerData.map((movie) => (
          <Link
            to={{ pathname: '/MovieMain/', state: { tvShow: movie } }}
            key={movie.id}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div key={movie.id} className="relative">
              <div className="relative">
                <img
                  src={movie && movie.backdrop_path}
                  alt={movie ? movie.name || movie.title : ''}
                  className="object-fill  rounded-md shadow-lg opacity-100 transition-opacity duration-300"
                  style={{ filter: 'brightness(0.3) ' }} // Adjust brightness and blur values
                />
              </div>
              <div className="absolute bottom-36 left-0 p-4 text-white text-start">
                <div className="text-4xl mb-1 font-semibold">
                  {movie ? movie.name || movie.title : ''}
                </div>
                <div className="text-lg">{movie ? movie.release_date : ''}</div>
                <div className="w-3/6 mt-2 text-sm">{movie ? movie.overview : ''}</div>
              </div>
              <div className="absolute bottom-14 right-14">
                <img
                  src={movie && movie.poster_path}
                  alt={movie ? movie.name || movie.title : ''}
                  className="object-cover w-96 h-96 rounded-md shadow-lg"
                />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
