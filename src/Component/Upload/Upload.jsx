import { useState } from 'react';
import './Upload.css'
import axios from 'axios'
export default function Upload() {
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [backdropPath, setBackdropPath] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [trailer, setTrailer] = useState('');
  const [video, setVideo] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [duration, setDuration] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = {
      title,
      overview,
      backdropPath,
      posterPath,
      trailer,
      video,
      releaseDate,
      duration,
      genre
    };
  
    axios.post('https://the-stream-backend.vercel.app/movie/review', data)
      .then(response => {
        console.log(response.data);
        // TODO: Handle the response if necessary
      })
      .catch(error => {
        console.log(error);
        // TODO: Handle the error if necessary
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="overview">Overview:</label>
        <textarea
          id="overview"
          name="overview"
          value={overview}
          onChange={(event) => setOverview(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="backdrop_path">Backdrop Path:</label>
        <input
          type="text"
          id="backdrop_path"
          name="backdrop_path"
          value={backdropPath}
          onChange={(event) => setBackdropPath(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="poster_path">Poster Path:</label>
        <input
          type="text"
          id="poster_path"
          name="poster_path"
          value={posterPath}
          onChange={(event) => setPosterPath(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="trailer">Trailer:</label>
        <input
          type="text"
          id="trailer"
          name="trailer"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="video">Video:</label>
        <input
          type="text"
          id="video"
          name="video"
          value={video}
          onChange={(event) => setVideo(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="release_date">Release Date:</label>
        <input
          type="text"
          id="release_date"
          name="release_date"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
