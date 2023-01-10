import React from 'react'
import "./Row.scss"
const imgUrl="https://image.tmdb.org/t/p/original";
import { AiFillCloseCircle } from "react-icons/ai";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card =({poster})=>(
   <div className='maincard'>
     <img className="card" src={poster} alt="cover"/>

  </div>
)


const Row =({title,arr=[]})=>
(

  <div className="row">
  <h2>{title}</h2>
    
    <div>
			{arr.map((item,index)=>(	
			<Card key={index} poster={`${imgUrl}`+item.poster_path}/>
    
		))
        
		}
   
    </div>
  </div>
)

export default Row;
