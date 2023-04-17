import React, { useState,useRef } from 'react';
import './Moviedescription.scss';

import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { ProgressBar, Button } from 'react-bootstrap';

const Moviedescription = () => {
  const location = useLocation();
  const { tvShow } = location.state;
  const { movie } = location.state;

  const Searchdata = location.state;
  const OverView = tvShow?.overview || Searchdata?.desc || movie?.desc || Searchdata?.overview;
  const Title = tvShow?.title || Searchdata?.title || movie?.title;
  const Air = tvShow?.first_air_date || Searchdata?.first_air_date || movie?.first_air_date || Searchdata?.releaseYear;
  const genre = tvShow?.genre || Searchdata?.genre || movie?.genre;
  const Trailer = tvShow?.trailer || Searchdata?.trailer || movie?.trailer;

  // const [progress, setProgress] = useState(0);
  // const [isDownloading, setIsDownloading] = useState(false);
  // const [downloadStatus, setDownloadStatus] = useState('');

  // const [cancelToken, setCancelToken] = useState(null);
  // const cancelTokenRef = useRef(null);

  const downloadVideo = () => {
    window.location.href=`https://the-stream-backend.vercel.app/download?url=${Trailer}`;

  };
  
  

  return (
    <div className='Moviedescription'>
      <h1>{Title}</h1>
      <p className='date'>{genre}</p>
      <p className='date'>{Air}</p>
      <p className='Dec_pera'>{OverView}</p>
      {/* <Button variant='primary' disabled={isDownloading} onClick={downloadVideo}>Download Trailer</Button>
      {isDownloading && (
        <>
        <ProgressBar now={progress} label={`${progress}%`} />

          <Button variant='warning' onClick={pauseDownload}>Pause</Button>
          <Button variant='danger' onClick={cancelDownload}>Cancel</Button>
          <div>{downloadStatus === 'completed' ? 'Download Completed!' : downloadStatus === 'failed' ? 'Download Failed!' : ''}</div>
        </>
      )} */}
      {/* <div className='Reaction'>
        <div className='Exl'>
          <h className='emoji'>😃</h>
        </div>
        <div className='normal'>
          <h className='emoji'>😊</h>
        </div>
        <div className='bad'>
          <h className='emoji'>😡</h>
        </div>
      */}

      {/* </div> */}
    </div>
  );
  
  
  
  
};

export default Moviedescription;
