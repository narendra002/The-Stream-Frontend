import React, { useState } from 'react';
import "./Row.scss";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Row = ({title, arr = []}) => {
  
  const Card = ({poster}) => (
    <div className='maincard'>
      <img className="card" src={poster} alt="cover"/>
    </div>
  );

  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item) => (
          <Link to={"/watch/"+item._id} state={{tvShow:item}}> 
            <Card key={item._id} poster={ item.poster_path}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Row;





{/* <Link to={"/watch/"+item._id} state={{tvShow:item}}> 
            <Card key={item._id} poster={ item.poster_path}/>
          </Link> */}
