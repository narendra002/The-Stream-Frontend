import React from 'react';
import './Moviedescription.scss';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Moviedescription =()=>{
    const navigate = useNavigate();

   const navigateHome = () => {
    navigate('/MovieMain');
  };
return (
    <div className='Moviedescription'>
      
        <h1>The ice age</h1>
          <h>2022</h>
        <p className='Dec_pera'>iieilrjngilanegliu eiurghieulrhcgiuherrigheurhg uiewhgierf hdrtrh rdtyblnejbnrglnoinogeinroi oirnggoin erngo e
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







