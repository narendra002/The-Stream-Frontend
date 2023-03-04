import React from 'react';
import './Moviedescription.scss';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';

const Moviedescription =()=>{
  const location = useLocation();
  const { tvShow } = location.state;
  const { movie } = location.state;
  // console.log(movie.desc);
 
  const Searchdata  = location.state;
  const OverView = tvShow?.overview || Searchdata?.desc ||movie?.desc||Searchdata?.overview;
  const Title = tvShow?.title || Searchdata?.title||movie?.title;
  const Air = tvShow?.first_air_date || Searchdata?.first_air_date||movie?.first_air_date|| Searchdata?.releaseYear;
  const genre= tvShow?.genre || Searchdata?.genre||movie?.genre;
  const Trailer=tvShow?.trailer || Searchdata?.trailer||movie?.trailer;
  const handleDownloadVideo = async () => {
    try {
      const videoUrl = Trailer;
      console.log(videoUrl);
      const videoRequest = new Request(videoUrl);
      fetch(videoRequest)
        .then(() => {
          const link = document.createElement('a');
          link.href = videoUrl;
          link.setAttribute('download', 'waterfall.mp4');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={OverView} />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={OverView} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content={`https://your-website.com${location.pathname}`} />
        <meta property="og:image" content={tvShow?.poster_path || Searchdata?.poster_path || movie?.poster_path} />
      </Helmet>
      <div className='Moviedescription'>
        <h1>{Title}</h1>
        <h className='date'>{genre}</h>
        <h className='date'>{Air}</h>
        <p className='Dec_pera'>{OverView}</p>
        <button onClick={handleDownloadVideo}>Download Trailer</button>
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
    </>
  );
};

export default Moviedescription;
