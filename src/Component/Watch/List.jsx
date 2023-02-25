import React from 'react';
import { useLocation } from 'react-router-dom';
import './List.scss';

const List = () => {
  const location = useLocation();
  const { tvShow } = location.state;

  return (
    <div className='list'>
      <ol>
        {tvShow.content.map((show) => (
          <li key={show._id}>{show.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default List;
