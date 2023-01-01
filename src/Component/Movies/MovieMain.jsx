import React from 'react'
import './MovieMain.scss'
const MovieMain = () => {
  return(
    <>
    <div className='MainMovie'>
      <div className='imgandinfo'>
          <div className=''>
           <img className ="posterImg" src="https://www.joblo.com/wp-content/uploads/2014/09/interstellar_water-1.jpg"/>
        </div>
      <div className='movieInfo'>
          <h className='year'>2023</h>
          <h className='MovieName'>INTERSTELLER</h>
          <div className='genres'>
            <ul>
             <li>horrer </li>
              <li>Drama </li>
            </ul>
          </div>
        <p className='decription'>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. </p>
        <div className='duration_imdb'>
          <h> 🕥 1:12:21</h>
          <h> IMDB 9/10</h>
        </div>
        <div className='Button'>
           <button className='watchnow'>▶ watch trailer</button>
           <button className='readmore'>Read more</button>
        </div>
      </div>
      </div>
    </div>
    </>
  ) 
}
export default MovieMain;  