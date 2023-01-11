import React from 'react';
import './Moviedescription.scss';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

const Moviedescription =()=>{

  const location=useLocation();
  const { movie } = location.state;
console.log(movie);
    const navigate = useNavigate();

   const navigateHome = () => {
    navigate('/MovieMain');
  };
return (
    <div className='Moviedescription'>
      
        <h1>{movie.title}</h1>
          <h>{movie.first_air_date}</h>
        <p className='Dec_pera'>{movie.desc}
        </p>

      <button className='viewdetail' onClick={navigateHome}> View Detail</button>
     <div className='Reaction'>
       <div className='Exl'> 
           <h className='Exl'>😃</h>
       </div>
       <div className='normal'>
           <h className='normal'>😊</h>
       </div>
       <div className='bad'>  
           <h className='bad'>😡</h>
       </div>

     </div>
      
    </div>

)
}
export default Moviedescription;






